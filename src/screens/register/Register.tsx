import {View, StatusBar, SafeAreaView, Image, Platform} from 'react-native';
import React, {useContext} from 'react';
import {FormProvider} from 'react-hook-form';

import {ThemeContext} from '../../context';
import {registerStyles} from './stylesRegister';
import {CustomText, SnackbarError, SnackbarSuccess} from '../../components';
import {RegisterForm} from './components';
import {useRegister} from './useRegister';

export function Register() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {
    containerRegister,
    logoImage,
    registerWrapper,
    mainTitleRegister,
    zoneInputWrapper,
  } = registerStyles({colors});
  //customLogic
  const {
    isPasswordSecret,
    isPasswordSecret2,
    isLoading,
    formMethods,
    isSnackbarError,
    isSnackbarSuccess,
    textError,
    textSuccess,
    setIsSnackbarError,
    setIsSnackbarSuccess,
    changePasswordSecret,
    changePasswordSecret2,
    validateCredentialsRegister,
  } = useRegister();
  return (
    <View style={containerRegister}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle="default"
        />
        <View style={registerWrapper}>
          <Image
            style={logoImage}
            source={require('../../public/undraw_Mobile_posts_re_bpuw.png')}
          />
          <View style={mainTitleRegister}>
            <CustomText
              fontSize={22}
              fontWeight={'bold'}
              marginBottom={11}
              color={colors.textPrimary}>
              Register if&nbsp;
            </CustomText>
            <CustomText
              fontSize={22}
              fontWeight={'bold'}
              marginBottom={11}
              color={colors.iii}>
              you`re new to the platform
            </CustomText>
          </View>
          <CustomText
            fontSize={14}
            fontWeight={'bold'}
            marginBottom={0}
            textAlign={'center'}
            color={colors.textSecondary}>
            Remember the form button is located at the end of the form.
          </CustomText>
        </View>
        <View style={zoneInputWrapper}>
          <FormProvider {...formMethods}>
            <RegisterForm
              isLoading={isLoading}
              isPasswordSecret={isPasswordSecret}
              changePasswordSecret={changePasswordSecret}
              isPasswordSecret2={isPasswordSecret2}
              changePasswordSecret2={changePasswordSecret2}
              validateCredentialsRegister={validateCredentialsRegister}
            />
          </FormProvider>
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
        <SnackbarSuccess
          setIsSnackbarSuccess={setIsSnackbarSuccess}
          isOpen={isSnackbarSuccess}
          msmText={textSuccess}
        />
      </SafeAreaView>
    </View>
  );
}
