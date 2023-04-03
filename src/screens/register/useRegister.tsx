import {useContext, useState} from 'react';
import {AuthContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IRegisterCredential, validateRegister} from '../../utils';

export function useRegister() {
  //global context
  const {handleRegister} = useContext(AuthContext);
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackbarError, setIsSnackbarError] = useState(false);
  const [isSnackbarSuccess, setIsSnackbarSuccess] = useState(false);
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isPasswordSecret2, setIsPasswordSecret2] = useState(true);
  const [textError, setTextError] = useState<string | undefined>(undefined);
  const textSuccess =
    'Your registration has been successful you can login with your credentials.';

  const formMethods = useForm<IRegisterCredential>({
    resolver: yupResolver(validateRegister),
  });

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

  function validateCredentialsRegister(data: IRegisterCredential) {
    // console.log({data, isLoading});
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    handleRegister(data)
      .then(res => {
        // console.log({res});
        if (res.apellido) {
          toggleSnackBarSuccess();
          setTimeout(() => {
            navigation.goBack();
          }, 2000);
        } else {
          setTextError(JSON.stringify(res));
          toggleSnackBarError();
        }
      })
      .catch(err => {
        console.log({err});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    //state
    isPasswordSecret,
    isPasswordSecret2,
    isLoading,
    textError,
    textSuccess,
    isSnackbarError,
    isSnackbarSuccess,
    //methods
    formMethods,
    setIsSnackbarError,
    setIsSnackbarSuccess,
    //functions
    changePasswordSecret,
    changePasswordSecret2,
    validateCredentialsRegister,
    toggleSnackBarError,
    toggleSnackBarSuccess,
  };
}
