import {IRegisterCredential} from '../../../utils';
import {IStylesLoginFormStyle} from '../../login/components/types';

export interface PropsRegisterForm {
  isLoading: boolean;
  isPasswordSecret: boolean;
  changePasswordSecret: () => void;
  isPasswordSecret2: boolean;
  changePasswordSecret2: () => void;
  validateCredentialsRegister(data: IRegisterCredential): void;
}

export interface IStylesRegisterFormStyle
  extends Partial<IStylesLoginFormStyle> {}
