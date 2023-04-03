import React from 'react';
import {Controller} from 'react-hook-form';
import {Platform, StyleSheet, Text, View} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import {IInputSelect} from './types';
import {widthFullScreen} from '../../utils';
import {inputSelectStyles} from './stylesCustom';
let dummy = [{label: 'Esperando data...', value: null}];

function Triangle({colorIcon, triangle}: {colorIcon: string; triangle: any}) {
  return <View style={{...triangle, borderBottomColor: colorIcon}} />;
}

export function InputSelect({
  borderColor,
  colorValueSelected,
  placeholder,
  placeholderTextColor,
  itemArr,
  name,
  control,
}: IInputSelect) {
  //customStyles
  const {contentInputGeneric, helperText, wrapperStandard, triangle} =
    inputSelectStyles();
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        return (
          <View style={wrapperStandard}>
            <View
              style={{
                ...contentInputGeneric,
                borderColor: borderColor,
              }}>
              <RNPickerSelect
                fixAndroidTouchableBug={true}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: placeholder,
                  value: null,
                  color: placeholderTextColor,
                }}
                style={{
                  inputIOS: {
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    width: widthFullScreen / 1.147,
                    borderColor: 'transparent',
                    borderRadius: 4,
                    color: colorValueSelected,
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                  inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    width: widthFullScreen / 1.147,
                    borderColor: 'transparent',
                    borderRadius: 8,
                    color: colorValueSelected,
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                  iconContainer: {
                    top: Platform.OS === 'ios' ? 18 : 17,
                    right: 10,
                  },
                }}
                onValueChange={onChange}
                value={typeof value === 'number' ? value.toString() : value}
                items={itemArr || dummy}
                // textInputProps={{ underlineColorAndroid: 'cyan' }}
                Icon={() => {
                  return (
                    <Triangle triangle={triangle} colorIcon={borderColor} />
                  );
                }}
              />
            </View>
            {!!errors[name] && (
              <Text style={helperText}>{errors[name]?.message as string}</Text>
            )}
          </View>
        );
      }}
    />
  );
}
