import {StyleSheet} from 'react-native';

import {IStylesRegister} from './types';
import {heightFullScreen, widthFullScreen} from '../../utils';

export function registerStyles(props: IStylesRegister) {
  const {
    colors: {background},
  } = props;
  return StyleSheet.create({
    containerRegister: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: background,
    },
    registerWrapper: {
      paddingTop: heightFullScreen * 0.01,
      alignItems: 'center',
      paddingHorizontal: 21,
    },
    logoImage: {
      width: widthFullScreen * 0.5,
      height: heightFullScreen * 0.2,
      resizeMode: 'contain',
    },
    mainTitleRegister: {
      flexDirection: 'row',
    },
    zoneInputWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      height: heightFullScreen * 0.5,
      backgroundColor: background,
      paddingTop: heightFullScreen * 0.062,
      paddingHorizontal: 0,
      flexGrow: 1,
      paddingBottom: 20,
    },
    contentForRecover: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 12,
    },
  });
}
