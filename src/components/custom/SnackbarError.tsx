import React from 'react';
import {Platform, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {ISnackbarError} from './types';

export function SnackbarError({
  msmText,
  isOpen,
  setIsSnackbarError,
  styled,
}: ISnackbarError): JSX.Element {
  return (
    <View>
      <Snackbar
        style={{backgroundColor: '#ff4d4f'}}
        wrapperStyle={
          styled
            ? {...styled}
            : {
                bottom: Platform.OS === 'ios' ? 93 : 60,
              }
        }
        visible={isOpen}
        duration={5000}
        onDismiss={() => setIsSnackbarError(false)}>
        {msmText}
      </Snackbar>
    </View>
  );
}
