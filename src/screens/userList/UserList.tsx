import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {useContext} from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useUserList from './useUserList';
import {UserFlatList} from './components';
import {Button, InputSearch} from '../../components';
import {AuthContext, ThemeContext} from '../../context';
import {userListStyles} from './stylesUserList';
import {heightFullScreen} from '../../utils';

export function UserList() {
  //globalContext
  const {logout} = useContext(AuthContext);
  //globalContext
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {card, textSecondary, textPrimary, background} = colors;
  //logic
  const {
    isLoading,
    userListData,
    textError,
    isSnackbarError,
    searchVal,
    setIsSnackbarError,
    setSearchVal,
    onTryAgain,
    onPressUser,
    filterQuery,
    clearQuery,
  } = useUserList();
  //customStyles
  const {containerUserList, btnLogout} = userListStyles({
    colors,
  });
  return (
    <View style={containerUserList}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={background}
          showHideTransition="slide"
          barStyle="default"
        />
        <InputSearch
          keyboardType="web-search"
          borderColor={colors.border}
          backgroundColor={card}
          firstIcon={
            <IconFeather
              onPress={filterQuery}
              name="search"
              size={21}
              color={textSecondary}
            />
          }
          lastIcon={
            <IconMaterialCommunityIcons
              onPress={clearQuery}
              name="close-circle"
              size={21}
              color={textSecondary}
            />
          }
          placeholder="Search"
          placeholderTextColor={textSecondary}
          inputColor={textPrimary}
          onChange={e => setSearchVal(e)}
          value={searchVal}
        />
        <Button
          // isLoading={loading}
          colorSpinierLoading={colors.textSecondary}
          buttonStyle={{
            ...btnLogout,
            backgroundColor: colors.iii,
          }}
          activeOpacity={0.9}
          onPress={logout}
          firstIcon={
            <IconMaterialCommunityIcons
              name="logout"
              size={heightFullScreen / 34}
              color={colors.background}
            />
          }
        />
        <UserFlatList
          textError={textError}
          hasError={isSnackbarError}
          setIsSnackbarError={setIsSnackbarError}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          onPressUser={onPressUser}
          loading={isLoading}
          users={userListData}
          onTryAgain={onTryAgain}
        />
      </SafeAreaView>
    </View>
  );
}
