import React, {useContext} from 'react';
import {View} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Button, CustomText, InputGeneric} from '../../../components';

import {useFormContext} from 'react-hook-form';
import {ICredencial, heightFullScreen} from '../../../utils';
import {ThemeContext} from '../../../context';
import {PropsLoginForm} from './types';
import {loginFormStyles} from './styleComponents';

export function LoginForm({
  isLoading,
  isPasswordSecret,
  // isSnackbarError,
  // textError,
  // toggleSnackBarError,
  changePasswordSecret,
  validateCredentialsLogin,
  getRegister,
}: PropsLoginForm): JSX.Element {
  //global context
  const {
    theme: {
      colors: {textPrimary, ddd, background},
    },
  } = useContext(ThemeContext);
  //controller
  const {control, handleSubmit: onSubmit} = useFormContext<ICredencial>();
  //customStyles
  const {contentInput, contentBts, btnLoginStyle, btnRegisterStyle} =
    loginFormStyles({
      backgroundColor: textPrimary,
      background,
    });

  return (
    <>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'email'}
          borderColor={ddd}
          firstIcon={
            <IconFeather name="mail" size={heightFullScreen / 34} color={ddd} />
          }
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'password'}
          borderColor={ddd}
          lastIcon={
            <IconIonicons
              onPress={changePasswordSecret}
              name={isPasswordSecret ? 'eye' : 'eye-off'}
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="Password"
          isSecretText={isPasswordSecret}
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
      <View style={contentBts}>
        <Button
          buttonStyle={btnRegisterStyle}
          activeOpacity={0.9}
          onPress={getRegister}
          textContent={
            <CustomText
              fontSize={22}
              fontWeight={'bold'}
              marginBottom={0}
              color={textPrimary}>
              Register
            </CustomText>
          }
        />
        <Button
          isLoading={isLoading}
          buttonStyle={btnLoginStyle}
          activeOpacity={0.9}
          onPress={onSubmit(validateCredentialsLogin)}
          textContent={
            <CustomText
              fontSize={22}
              fontWeight={'bold'}
              marginBottom={0}
              color={background}>
              Login
            </CustomText>
          }
        />
      </View>
      {/* <SnackbarError
        handleChangeSnackbar={toggleSnackBarError}
        isOpen={isSnackbarError}
        styled={{
          botton: 0,
          left: -200,
          paddingHorizontal: Platform.OS === 'ios' ? 0 : 10,
        }}
        msmText={textError ? textError : 'Unexpected error please try again'}
      /> */}
    </>
  );
}
