import {StyleSheet} from 'react-native';

import {ICardUserStyles} from './types';
import {widthFullScreen} from '../../../utils';

export function cardUserStyles({
  background,
  iii,
  textPrimary,
  textSecondary,
}: ICardUserStyles) {
  return StyleSheet.create({
    animationCardContent: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginBottom: 10,
      // backgroundColor: 'rgba(255, 255,255, 0.8)',
      backgroundColor: background,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 5,
    },
    imgCard: {width: 70, height: 70, borderRadius: 70, marginRight: 20 / 2},
    textFullName: {fontSize: 22, fontWeight: '700', color: textPrimary},
    textCC: {fontSize: 16, opacity: 0.7, color: textSecondary},
    textEmail: {
      fontSize: 14,
      opacity: 0.8,
      color: iii,
    },
  });
}

export function listEmptyStyles() {
  return StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnReload: {
      justifyContent: 'center',
      alignItems: 'center',
      width: widthFullScreen * 0.113,
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
  });
}
