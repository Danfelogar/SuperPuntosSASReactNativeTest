import {ICredencial} from '../../../utils';

export interface PropsLoginForm {
  isLoading: boolean;
  // isSnackbarError: boolean;
  isPasswordSecret: boolean;
  //textError?: string;
  changePasswordSecret: () => void;
  //toggleSnackBarError: () => void;
  validateCredentialsLogin(data: ICredencial): void;
  getRegister: () => void;
}

export interface IStylesLoginFormStyle {
  backgroundColor: string;
  background: string;
}
