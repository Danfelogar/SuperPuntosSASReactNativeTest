import {StyleSheet} from 'react-native';
import {ICustomTextStyles} from './types';

export function customTextStyles({
  fontSize,
  marginBottom,
  fontWeight,
  color,
  textAlign,
}: ICustomTextStyles) {
  return StyleSheet.create({
    styleCustomText: {
      fontSize,
      fontWeight,
      margin: 0,
      marginBottom,
      color,
      textAlign,
    },
  });
}

export function inputGenericStyles() {
  return StyleSheet.create({
    wrapperStandard: {
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'orange',
    },
    contentInputGeneric: {
      display: 'flex',
      borderRadius: 10,
      paddingVertical: 6,
      paddingHorizontal: 10,
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentInput: {
      display: 'flex',
      fontSize: 16.5,
      fontWeight: '400',
      flexGrow: 1,
      height: '100%',
      padding: 10,
    },
    helperText: {
      fontSize: 15.2,
      paddingLeft: 10,
      // fontWeight: '400',
      color: '#ff4d4f',
    },
  });
}

export function inputSelectStyles() {
  return StyleSheet.create({
    wrapperStandard: {
      display: 'flex',
      flexDirection: 'column',
    },
    contentInputGeneric: {
      display: 'flex',
      borderRadius: 10,
      paddingVertical: 6,
      paddingHorizontal: 10,
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentInput: {
      display: 'flex',
      fontSize: 16.5,
      fontWeight: '400',
      flexGrow: 1,
      height: '100%',
      padding: 10,
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 6,
      borderRightWidth: 6,
      borderBottomWidth: 10,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      transform: [{rotate: '180deg'}],
    },
    helperText: {
      fontSize: 15.2,
      paddingLeft: 10,
      // fontWeight: '400',
      color: '#ff4d4f',
    },
  });
}

export function inputSingleImage() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    btnChangeDate: {
      borderRadius: 5,
      alignContent: 'center',
      justifyContent: 'center',
      height: 50,
      paddingHorizontal: 35,
      marginRight: 10,
    },
    btnDeleteDate: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      alignContent: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 50,
      paddingHorizontal: 35,
      marginBottom: 10,
    },
    titleOfDataBtn: {
      fontSize: 18.5,
      textAlign: 'center',
      fontWeight: '400',
    },
    titleOfDeleteBtn: {
      fontSize: 20.5,
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Roboto-Black',
    },
    helperText: {
      fontSize: 15.2,
      paddingLeft: 10,
      // fontWeight: '400',
      color: '#ff4d4f',
    },
  });
}
