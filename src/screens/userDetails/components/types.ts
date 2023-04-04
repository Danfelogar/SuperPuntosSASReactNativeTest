import {IUserDetails} from '../types';

export interface PropsUserDetailsForm {
  isLoading: boolean;
  isPasswordSecret: boolean;
  changePasswordSecret: () => void;
  isPasswordSecret2: boolean;
  changePasswordSecret2: () => void;
  validateCredentialsUserDetails(data: IUserDetails): void;
}
