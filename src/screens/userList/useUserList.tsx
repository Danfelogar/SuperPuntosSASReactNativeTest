import {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AxiosError} from 'axios';

import {usersServices} from '../../services';
import {AuthContext} from '../../context';
import {IUserListData} from './types';

export default function useUserList() {
  //globalContext
  const {userToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchVal, setSearchVal] = useState<string | undefined>(undefined);
  const [params, setParams] = useState({});
  const [userListData, setUserListData] = useState<IUserListData[]>([]);
  const [isSnackbarError, setIsSnackbarError] = useState(false);
  const textError = 'Ups, an unexpected error occurred, please try again..';

  const navigation = useNavigation<any>();

  function toggleSnackBarError() {
    setIsSnackbarError(!isSnackbarError);
  }
  async function getUserListData({force}: {force?: boolean}) {
    (force || userListData.length < 1) && setIsLoading(true);
    return await usersServices
      .get('/usuario/', {
        params,
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then(res => {
        setUserListData(res.data);
        setIsLoading(false);
        return res;
      })
      .catch((err: AxiosError) => {
        // console.log(err.response?.data ?? err.cause);

        setIsLoading(false);
        toggleSnackBarError();
        return err.response?.data ?? err.cause;
      });
  }

  useEffect(() => {
    if (userToken) {
      getUserListData({force: false});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onPressUser(idUser: number) {
    //en el futuro recibo un id y navego a detalles del producto
    navigation.navigate('UserDetails', {id: idUser});
    // console.log({idUser});
  }

  function filterQuery() {
    if (searchVal?.includes('@')) {
      return setParams({
        email: searchVal,
      });
    } else if (Number(searchVal)) {
      return setParams({
        cedula: searchVal,
      });
    } else if (!Number(searchVal) && !searchVal?.includes('@')) {
      const auxString = searchVal?.split(' ');
      return setParams({
        nombre: auxString && auxString[0],
        apellido: auxString && auxString[1],
      });
    }
  }

  function clearQuery() {
    setSearchVal(undefined);
    setParams({});
  }

  useEffect(() => {
    if (userToken) {
      getUserListData({force: false});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  function onTryAgain() {
    setSearchVal(undefined);
    setParams({});
  }

  return {
    //state
    textError,
    isLoading,
    userListData,
    isSnackbarError,
    searchVal,
    //methods
    setIsSnackbarError,
    setSearchVal,
    //functions
    onTryAgain,
    onPressUser,
    toggleSnackBarError,
    filterQuery,
    clearQuery,
  };
}
