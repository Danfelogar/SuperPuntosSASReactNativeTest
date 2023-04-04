import {View, Platform} from 'react-native';
import React, {useContext} from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {IListEmpty} from './types';
import {listEmptyStyles} from './stylesComponents';
import {Button, CustomText, SnackbarError} from '../../../components';
import {ThemeContext} from '../../../context';
import {heightFullScreen} from '../../../utils';

export function ListEmpty({
  hasError,
  onTryAgain,
  setIsSnackbarError,
  textError,
  loading,
}: IListEmpty): JSX.Element {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //globalStyles
  const {content, btnReload} = listEmptyStyles();
  return (
    <View style={content}>
      <CustomText
        fontSize={22}
        fontWeight={'bold'}
        marginBottom={11}
        textAlign={'center'}
        color={colors.textPrimary}>
        {textError}
      </CustomText>
      <Button
        isLoading={loading}
        colorSpinierLoading={colors.textSecondary}
        buttonStyle={{
          ...btnReload,
          backgroundColor: colors.iii,
        }}
        activeOpacity={0.9}
        onPress={onTryAgain}
        firstIcon={
          <IconMaterialCommunityIcons
            name="reload-alert"
            size={heightFullScreen / 34}
            color={colors.background}
          />
        }
      />
      <SnackbarError
        setIsSnackbarError={setIsSnackbarError}
        isOpen={hasError}
        styled={{
          botton: 0,
          paddingHorizontal: Platform.OS === 'ios' ? 0 : 10,
        }}
        msmText={textError}
      />
    </View>
  );
}
