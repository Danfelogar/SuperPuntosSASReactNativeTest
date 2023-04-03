import {useNavigation} from '@react-navigation/native';
import {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ICredencial, validateLogin} from '../../utils';
import {AuthContext} from '../../context';

export function useLogin() {
  //global context
  const {handleLogin} = useContext(AuthContext);
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isSnackbarError, setIsSnackbarError] = useState(false);
  const [textError, setTextError] = useState<string | undefined>(undefined);

  const formMethods = useForm<ICredencial>({
    resolver: yupResolver(validateLogin),
  });

  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }

  function toggleSnackBarError() {
    setIsSnackbarError(!isSnackbarError);
  }

  function validateCredentialsLogin(data: ICredencial) {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    handleLogin(data)
      .then(res => {
        const key = res?.data?.key;
        // const errorObj = res.response?.data ?? res.cause;
        const errorObj = (res.response?.data ?? res.cause) || res;
        if (key) {
          return console.log('debo ir a las listas de usuario===>', key);
          //go to users list
        } else if (errorObj) {
          setTextError(JSON.stringify(errorObj));
          return toggleSnackBarError();
        }
      })
      .catch(err => {
        console.log({err});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getRegister() {
    navigation.navigate('Register');
  }
  return {
    //states
    isPasswordSecret,
    isLoading,
    textError,
    isSnackbarError,
    //methods
    formMethods,
    setIsSnackbarError,
    //functions
    changePasswordSecret,
    validateCredentialsLogin,
    getRegister,
    toggleSnackBarError,
  };
}
