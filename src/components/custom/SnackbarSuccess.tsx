import React from 'react';
import {Platform, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {ISnackbarSuccess} from './types';

export function SnackbarSuccess({
  msmText,
  isOpen,
  setIsSnackbarSuccess,
}: ISnackbarSuccess) {
  return (
    <View>
      <Snackbar
        style={{backgroundColor: '#55a630'}}
        wrapperStyle={{
          paddingHorizontal: Platform.OS === 'android' ? 10 : 0,
          // top: isNotPlusIcon
          //   ? -120
          //   : msmText.length > 31
          //   ? -heightFullScreen * 0.13
          //   : -heightFullScreen * 0.08,
          bottom: 0,
        }}
        visible={isOpen}
        duration={5000}
        onDismiss={() => setIsSnackbarSuccess(false)}>
        {msmText}
      </Snackbar>
    </View>
  );
}
