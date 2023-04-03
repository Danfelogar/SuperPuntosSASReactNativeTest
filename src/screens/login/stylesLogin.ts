import {StyleSheet} from 'react-native';

import {IStylesLogin} from './types';
import {heightFullScreen, widthFullScreen} from '../../utils';

export function loginStyles(props: IStylesLogin) {
  const {
    colors: {background},
  } = props;
  return StyleSheet.create({
    containerLogin: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: background,
    },
    loginWrapper: {
      paddingTop: heightFullScreen * 0.01,
      alignItems: 'center',
    },
    logoImage: {
      width: widthFullScreen * 0.5,
      height: heightFullScreen * 0.3,
      resizeMode: 'contain',
    },
    mainTitleLogin: {
      flexDirection: 'row',
    },
    zoneInputWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      height: heightFullScreen * 0.5,
      backgroundColor: background,
      paddingTop: heightFullScreen * 0.062,
      paddingHorizontal: 20,
      width: widthFullScreen,
    },
    contentForRecover: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 12,
    },
  });
}
