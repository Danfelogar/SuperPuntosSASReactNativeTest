import {StyleSheet} from 'react-native';
import {heightFullScreen} from '../../../utils';
import {IStylesLoginFormStyle} from './types';

export function loginFormStyles({
  backgroundColor,
  background,
}: IStylesLoginFormStyle) {
  return StyleSheet.create({
    contentInput: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxHeight: heightFullScreen * 0.5,
      marginBottom: 22,
    },
    contentBts: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    btnLoginStyle: {
      backgroundColor,
      paddingHorizontal: 50,
      paddingVertical: 17,
      borderRadius: 17,
      marginLeft: 15,
    },
    btnRegisterStyle: {
      backgroundColor: background,
      paddingHorizontal: 35,
      paddingVertical: 15,
      borderRadius: 17,
      borderWidth: 2,
      borderColor: backgroundColor,
    },
  });
}
