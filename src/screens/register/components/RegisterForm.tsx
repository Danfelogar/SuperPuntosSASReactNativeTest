import {Platform, View} from 'react-native';
import React from 'react';
import {useContext} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ThemeContext} from '../../../context';
import {useFormContext} from 'react-hook-form';
import {IRegisterCredential, heightFullScreen} from '../../../utils';
import {PropsRegisterForm} from './types';
import {registerFormStyles} from './styleComponents';
import {
  Button,
  CustomText,
  InputGeneric,
  InputSingleImage,
} from '../../../components';

export function RegisterForm({
  isLoading,
  isPasswordSecret,
  isPasswordSecret2,
  changePasswordSecret,
  changePasswordSecret2,
  validateCredentialsRegister,
}: PropsRegisterForm): JSX.Element {
  //global context
  const {
    theme: {
      colors: {textPrimary, ddd, hhh, bbb, background},
    },
  } = useContext(ThemeContext);
  //controller
  const {control, handleSubmit: onSubmit} =
    useFormContext<IRegisterCredential>();
  //customStyles
  const {contentInput, btnRegisterStyle} = registerFormStyles({
    backgroundColor: textPrimary,
  });

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={Platform.OS === 'android' ? 100 : undefined}
      enableOnAndroid={true}
      extraHeight={Platform.OS === 'android' ? 80 : undefined}
      enableAutomaticScroll={true}
      keyboardShouldPersistTaps="handled">
      <View style={{marginBottom: 13, alignItems: 'center'}}>
        <InputSingleImage
          backgroundColor={hhh}
          btnTextColor={bbb}
          name="image"
          control={control}
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'username'}
          borderColor={ddd}
          firstIcon={
            <IconFontAwesome
              name="user-circle-o"
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="User name"
          keyboardType="default"
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
          firstIcon={
            <IconEntypo name="key" size={heightFullScreen / 34} color={ddd} />
          }
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
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'password2'}
          borderColor={ddd}
          firstIcon={
            <IconEntypo name="key" size={heightFullScreen / 34} color={ddd} />
          }
          lastIcon={
            <IconIonicons
              onPress={changePasswordSecret2}
              name={isPasswordSecret2 ? 'eye' : 'eye-off'}
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="Repeat password"
          isSecretText={isPasswordSecret2}
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
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
          name={'nombre'}
          borderColor={ddd}
          firstIcon={
            <IconFontAwesome
              name="user"
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="Name"
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'apellido'}
          borderColor={ddd}
          firstIcon={
            <IconFontAwesome
              name="user-o"
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="Last name"
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'cedula'}
          borderColor={ddd}
          firstIcon={
            <IconFontAwesome5
              name="id-card"
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="DNI"
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
          keyboardType={
            Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'
          }
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'entidad'}
          borderColor={ddd}
          firstIcon={
            <IconIonicons
              name="fitness-outline"
              size={heightFullScreen / 34}
              color={ddd}
            />
          }
          placeholder="Entity"
          placeholderTextColor={ddd}
          inputColor={textPrimary}
          autoCorrect
        />
        {/* <InputSelect
          borderColor={ddd}
          control={control}
          name="entidad"
          placeholder="Entity..."
          colorValueSelected={textPrimary}
          placeholderTextColor={textSecondary}
          itemArr={[{label: 'EPS', value: 'EPS'}]}
        /> */}
      </View>
      <Button
        isLoading={isLoading}
        buttonStyle={btnRegisterStyle}
        activeOpacity={0.9}
        onPress={onSubmit(validateCredentialsRegister)}
        textContent={
          <CustomText
            fontSize={26}
            fontWeight={'bold'}
            marginBottom={0}
            color={background}>
            Register user
          </CustomText>
        }
      />
    </KeyboardAwareScrollView>
  );
}
