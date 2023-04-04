import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {View, SafeAreaView, Platform, ActivityIndicator} from 'react-native';
import {RootStackMainParams} from '../../navigation';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ThemeContext} from '../../context';
import {userDetailsStyles} from './stylesUserDetail';
import {StatusBar} from 'react-native';
import {
  Button,
  CustomText,
  SnackbarError,
  SnackbarSuccess,
} from '../../components';
import {useUserDetails} from './useUserDetails';
import {FormProvider} from 'react-hook-form';
import {UserDetailsForm} from './components';

interface Props extends StackScreenProps<RootStackMainParams, 'UserDetails'> {}

export function UserDetails({route, navigation}: Props) {
  const {id} = route.params;
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {containerUserDetails, containerGoBack, btnGoBack, zoneInputWrapper} =
    userDetailsStyles({colors});
  //customLogic
  const {
    userDetails,
    textSuccess,
    textError,
    isLoading,
    isLoading2,
    isSnackbarError,
    isSnackbarSuccess,
    isPasswordSecret,
    isPasswordSecret2,
    formMethods,
    setIsSnackbarError,
    setIsSnackbarSuccess,
    changePasswordSecret,
    changePasswordSecret2,
    validateCredentialsUserDetails,
  } = useUserDetails({id});
  return (
    <View style={containerUserDetails}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.background}
          showHideTransition="slide"
          barStyle="default"
        />
        <View style={containerGoBack}>
          <Button
            // isLoading={loading}
            colorSpinierLoading={colors.background}
            buttonStyle={{
              ...btnGoBack,
              backgroundColor: colors.textSecondary,
            }}
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}
            firstIcon={
              <IconMaterialIcons
                name="keyboard-arrow-left"
                size={28}
                color={colors.textPrimary}
              />
            }
          />
        </View>
        <CustomText
          fontSize={26}
          fontWeight={'bold'}
          textAlign={'center'}
          marginBottom={0}
          color={colors.textPrimary}>
          {`Updating user with id: ${id}`}
        </CustomText>
        <View style={zoneInputWrapper}>
          {isLoading2 && !userDetails && (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator size="large" color={colors.hhh} />
              <CustomText
                fontSize={32}
                fontWeight={'bold'}
                textAlign={'center'}
                marginBottom={11}
                color={colors.textPrimary}>
                Loading information please wait
              </CustomText>
            </View>
          )}
          {userDetails && (
            <FormProvider {...formMethods}>
              <UserDetailsForm
                isLoading={isLoading}
                isPasswordSecret={isPasswordSecret}
                changePasswordSecret={changePasswordSecret}
                isPasswordSecret2={isPasswordSecret2}
                changePasswordSecret2={changePasswordSecret2}
                validateCredentialsUserDetails={validateCredentialsUserDetails}
              />
            </FormProvider>
          )}
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
