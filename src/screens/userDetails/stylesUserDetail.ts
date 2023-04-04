import {StyleSheet} from 'react-native';

import {heightFullScreen, widthFullScreen} from '../../utils';
import {IStylesRegister} from '../register';

export function userDetailsStyles(props: IStylesRegister) {
  const {
    colors: {background},
  } = props;
  return StyleSheet.create({
    containerUserDetails: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: background,
    },
    containerGoBack: {
      width: widthFullScreen,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    btnGoBack: {
      justifyContent: 'center',
      alignItems: 'center',
      width: widthFullScreen * 0.133,
      borderRadius: 50,
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    userDetailsWrapper: {
      paddingTop: heightFullScreen * 0.01,
      alignItems: 'center',
      paddingHorizontal: 21,
    },
    logoImage: {
      width: widthFullScreen * 0.5,
      height: heightFullScreen * 0.2,
      resizeMode: 'contain',
    },
    mainTitleUserDetails: {
      flexDirection: 'row',
    },
    zoneInputWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      height: heightFullScreen * 0.5,
      backgroundColor: background,
      paddingTop: heightFullScreen * 0.034,
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
