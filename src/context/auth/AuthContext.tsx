import {createContext} from 'react';
import {ICredencial, IRegisterCredential} from '../../utils';

export interface ContextProps {
  isLoggedIn: 'login' | 'logout' | 'pending';
  userToken?: string;
  //methods
  handleLogin: (data: ICredencial) => Promise<any>;
  handleRegister: (data: IRegisterCredential) => Promise<any>;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
