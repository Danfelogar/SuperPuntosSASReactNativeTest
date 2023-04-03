import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {FormProvider} from 'react-hook-form';

import {ThemeContext} from '../../context';
import {loginStyles} from './stylesLogin';
import {CustomText, SnackbarError} from '../../components';
import {useLogin} from './useLogin';
import {LoginForm} from './components/LoginForm';

export function Login() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {
    containerLogin,
    logoImage,
    loginWrapper,
    mainTitleLogin,
    zoneInputWrapper,
    contentForRecover,
  } = loginStyles({colors});
  const {textPrimary} = colors;
  //customLogic
  const {
    isPasswordSecret,
    isLoading,
    formMethods,
    textError,
    isSnackbarError,
    setIsSnackbarError,
    changePasswordSecret,
    validateCredentialsLogin,
    getRegister,
  } = useLogin();
  return (
    <View style={containerLogin}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle="default"
        />
        <View style={loginWrapper}>
          <Image style={logoImage} source={require('../../public/logo.png')} />
          <View style={mainTitleLogin}>
            <CustomText
              fontSize={32}
              fontWeight={'bold'}
              marginBottom={11}
              color={colors.textPrimary}>
              Login to&nbsp;
            </CustomText>
            <CustomText
              fontSize={32}
              fontWeight={'bold'}
              marginBottom={11}
              color={colors.iii}>
              verify users
            </CustomText>
          </View>
          <CustomText
            fontSize={16}
            fontWeight={'bold'}
            marginBottom={0}
            color={colors.textSecondary}>
            Info about SUPER PUNTOS users
          </CustomText>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={zoneInputWrapper}>
            <KeyboardAvoidingView
              style={{alignItems: 'center'}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <FormProvider {...formMethods}>
                <LoginForm
                  isLoading={isLoading}
                  isPasswordSecret={isPasswordSecret}
                  getRegister={getRegister}
                  changePasswordSecret={changePasswordSecret}
                  validateCredentialsLogin={validateCredentialsLogin}
                />
              </FormProvider>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
        <View style={contentForRecover}>
          <CustomText
            fontSize={16}
            fontWeight={'bold'}
            marginBottom={0}
            color={textPrimary}>
            Forgot your password or user name ?
          </CustomText>
        </View>
        <SnackbarError
          setIsSnackbarError={setIsSnackbarError}
          isOpen={isSnackbarError}
          styled={{
            botton: 0,
            paddingHorizontal: Platform.OS === 'ios' ? 0 : 10,
          }}
          msmText={textError ? textError : 'Unexpected error please try again'}
        />
      </SafeAreaView>
    </View>
  );
}
