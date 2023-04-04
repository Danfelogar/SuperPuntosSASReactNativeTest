import {useContext, useEffect, useState} from 'react';

import {usersServices} from '../../services';
import {AxiosError} from 'axios';
import {AuthContext} from '../../context';
import {IUserListData} from './types';

export default function useUserList() {
  //globalContext
  const {userToken} = useContext(AuthContext);
  const [userListData, setUserListData] = useState<IUserListData[]>([]);

  async function getUserListData() {
    return await usersServices
      .get('/usuario/', {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then(res => {
        setUserListData(res.data);
        return res;
      })
      .catch((err: AxiosError) => {
        // console.log(err.response?.data ?? err.cause);
        return err.response?.data ?? err.cause;
      });
  }

  useEffect(() => {
    if (userToken) {
      getUserListData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    //state
    userListData,
    //methods
    //functions
  };
}
