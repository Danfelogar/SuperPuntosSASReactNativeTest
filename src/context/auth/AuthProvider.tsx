import {FC, ReactNode, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext, authReducer} from './';
import {ICredencial, IRegisterCredential} from '../../utils';
import {usersServices} from '../../services';
import {AxiosError} from 'axios';

export interface AuthState {
  isLoggedIn: 'login' | 'logout' | 'pending';
  userToken?: string;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: 'pending',
  userToken: undefined,
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  async function validatedIsLogin() {
    const user = await AsyncStorage.getItem('@userToken');
    if (user !== null) {
      return login(JSON.parse(user), true);
    }
    if (user === null) {
      return dispatch({type: '[Auth] - Block Login'});
    }
  }

  async function login(userToken: string, validate: boolean = false) {
    if (!validate) {
      await AsyncStorage.setItem('@userToken', JSON.stringify(userToken));
    }
    dispatch({type: '[Auth] - Login', payload: userToken});
  }

  async function logout() {
    await AsyncStorage.removeItem('@userToken');
    dispatch({type: '[Auth] - Logout'});
  }

  useEffect(() => {
    validatedIsLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin(val: ICredencial) {
    return await usersServices
      .post('/login/', {...val})
      .then(res => {
        // login(data as IUser);
        const token = res.data.key;
        if (token) {
          // login(token);
        }
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(
          err.response?.data ?? err.cause,
          // err.config,
          // err.message,
          // err.name,
          // err.request,
          //err.response,
          // err.stack,
          // err.status,
          // err.toJSON,
        );
        return err.response?.data ?? err.cause;
      });
  }

  async function handleRegister(val: IRegisterCredential) {
    return await usersServices
      .post('/registro/', JSON.stringify({...val}), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // .post('/registro', {data: JSON.stringify({...val})})
      .then(res => {
        // login(data as IUser);
        return res.data;
      })
      .catch(err => {
        console.log(
          err.response?.data ?? err.cause,
          // err.config,
          // err.message,
          // err.name,
          // err.request,
          //err.response,
          // err.stack,
          // err.status,
          // err.toJSON,
        );
        return err.response?.data;
      });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        //methods
        //functions
        handleLogin,
        handleRegister,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
