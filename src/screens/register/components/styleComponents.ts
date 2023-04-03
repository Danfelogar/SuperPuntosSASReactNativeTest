import {StyleSheet} from 'react-native';
import {heightFullScreen} from '../../../utils';
import {IStylesRegisterFormStyle} from './types';

export function registerFormStyles({
  backgroundColor,
}: IStylesRegisterFormStyle) {
  return StyleSheet.create({
    contentInput: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxHeight: heightFullScreen * 0.5,
      marginBottom: 22,
    },
    btnRegisterStyle: {
      backgroundColor,
      paddingHorizontal: 50,
      paddingVertical: 17,
      borderRadius: 17,
      alignItems: 'center',
      marginBottom: 20,
    },
  });
}
