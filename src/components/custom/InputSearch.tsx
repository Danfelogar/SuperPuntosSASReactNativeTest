import React from 'react';
import {View, TextInput} from 'react-native';

import {IInputSearch} from './types';
import {inputSearchStyles} from './stylesCustom';

export function InputSearch({
  keyboardType,
  borderColor,
  backgroundColor,
  firstIcon,
  placeholder,
  placeholderTextColor,
  autoCorrect,
  inputColor,
  lastIcon,
  value,
  onChange,
}: IInputSearch) {
  //globalStyles
  const {contentInput, contentInputGeneric, wrapperStandard} =
    inputSearchStyles();
  return (
    <View style={wrapperStandard}>
      <View
        style={{
          ...contentInputGeneric,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        }}>
        {firstIcon && firstIcon}
        <TextInput
          style={{
            ...contentInput,
            color: inputColor,
            maxWidth:
              firstIcon && lastIcon
                ? '85%'
                : firstIcon || lastIcon
                ? '92%'
                : '100%',
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCorrect={autoCorrect}
          //   secureTextEntry={isSecretText || false}
          keyboardType={keyboardType || 'default'}
          onChangeText={e => onChange(e)}
          value={value || undefined}
        />
        {lastIcon && lastIcon}
      </View>
    </View>
  );
}
