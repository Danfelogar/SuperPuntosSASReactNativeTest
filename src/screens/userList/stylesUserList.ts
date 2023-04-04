import {StyleSheet} from 'react-native';

import {IStylesLogin} from '../login';
import {heightFullScreen, widthFullScreen} from '../../utils';

export function userListStyles(props: IStylesLogin) {
  const {
    colors: {aaa},
  } = props;
  return StyleSheet.create({
    containerUserList: {
      flex: 1,
      paddingHorizontal: 7,
      paddingTop: 30,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: aaa,
    },
    contentActions: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
      backgroundColor: 'orange',
      maxHeight: heightFullScreen * 0.056,
    },
    btnLogout: {
      position: 'absolute',
      bottom: 30,
      right: 20,
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      width: widthFullScreen * 0.133,
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
  });
}
