import React from 'react';
import {Text} from 'react-native';
import {customTextStyles} from './stylesCustom';
import {IComponentCustomText} from './types';

export function CustomText({
  fontSize,
  marginBottom,
  fontWeight,
  children,
  color,
  textAlign = 'left',
}: IComponentCustomText) {
  //customStyles
  const {styleCustomText} = customTextStyles({
    fontSize,
    marginBottom,
    fontWeight,
    color,
    textAlign,
  });
  return <Text style={styleCustomText}>{children}</Text>;
}
