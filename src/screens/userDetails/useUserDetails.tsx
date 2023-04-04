import {yupResolver} from '@hookform/resolvers/yup';
import {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {usersServices} from '../../services';
import {IUserListData} from '../userList';
import {AxiosError} from 'axios';
import {AuthContext} from '../../context';
import {IUserDetails} from './types';
import {validateUserDetails} from '../../utils';

export function useUserDetails({id}: {id: number}) {
  //globalContext
  const {userToken} = useContext(AuthContext);
  // const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isSnackbarError, setIsSnackbarError] = useState(false);
  const [isSnackbarSuccess, setIsSnackbarSuccess] = useState(false);
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isPasswordSecret2, setIsPasswordSecret2] = useState(true);
  const [textError, setTextError] = useState<string | undefined>(undefined);

  const [userDetails, setUserDetails] = useState<IUserListData>();
  const textSuccess = `The user with id: ${id} was successfully updated.`;

  async function getUserDetails() {
    if (isLoading2) {
      return;
    }
    setIsLoading2(true);
    return await usersServices
      .get(`/usuario/${id}/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then(res => {
        setUserDetails(res.data);
        setIsLoading2(false);
        return res;
      })
      .catch((err: AxiosError) => {
        setTextError(JSON.stringify(err.response?.data ?? err.cause));

        setIsLoading2(false);
        toggleSnackBarError();
        return err.response?.data ?? err.cause;
      });
  }

  const formMethods = useForm<IUserDetails>({
    resolver: yupResolver(validateUserDetails),
  });
  useEffect(() => {
    if (userDetails?.id) {
      formMethods.reset({
        ...userDetails,
        cedula: userDetails.cedula?.toString(),
      });
    }

    return () => {
      formMethods.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);

  useEffect(() => {
    if (id) {
      getUserDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }

  function changePasswordSecret2() {
    setIsPasswordSecret2(!isPasswordSecret2);
  }

  function toggleSnackBarError() {
    setIsSnackbarError(!isSnackbarError);
  }

  function toggleSnackBarSuccess() {
    setIsSnackbarSuccess(!isSnackbarSuccess);
  }

  async function validateCredentialsUserDetails(data: IUserDetails) {
    // console.log({data, isLoading});
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    return await usersServices
      .patch(`/usuario/actualizar/${id}/`, JSON.stringify({...data}), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
      })
      .then(res => {
        console.log('resActualizada===>', {res});
        if (res.data) {
          toggleSnackBarSuccess();
        } else if (!res.data) {
          setTextError(JSON.stringify(res));
          toggleSnackBarError();
        }
      })
      .catch(err => {
        console.log({err});
        setTextError(JSON.stringify(err));
        toggleSnackBarError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    //state
    userDetails,
    textSuccess,
    textError,
    isLoading,
    isLoading2,
    isSnackbarError,
    isSnackbarSuccess,
    isPasswordSecret,
    isPasswordSecret2,
    //methods
    formMethods,
    setIsSnackbarError,
    setIsSnackbarSuccess,
    //functions
    changePasswordSecret,
    changePasswordSecret2,
    validateCredentialsUserDetails,
    toggleSnackBarError,
    toggleSnackBarSuccess,
  };
}
