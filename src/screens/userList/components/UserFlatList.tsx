import {Animated, RefreshControl, StatusBar} from 'react-native';
import React, {useContext} from 'react';
import {IUserFlatList} from './types';
import {ThemeContext} from '../../../context';
import {CardUser} from './CardUser';
import {ListEmpty} from './ListEmpty';
import {widthFullScreen} from '../../../utils';

export function UserFlatList({
  loading,
  onPressUser,
  onTryAgain,
  users,
  hasError,
  setIsSnackbarError,
  textError,
  initialNumToRender,
  maxToRenderPerBatch,
}: IUserFlatList): JSX.Element {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {hhh, iii, background, textPrimary, textSecondary} = colors;
  // const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <Animated.FlatList
      data={loading ? [] : users}
      // onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
      //   useNativeDriver: true,
      // })}
      contentContainerStyle={{
        padding: 10,
        width: widthFullScreen * 0.96,
        paddingTop: StatusBar.currentHeight || 42,
      }}
      onRefresh={onTryAgain}
      refreshing={loading}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onTryAgain}
          colors={[hhh]}
          tintColor={hhh}
        />
      }
      showsVerticalScrollIndicator={false}
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      //   onEndReached={onEndReached}
      //   onEndReached={(prop)=>{
      //     setPage((page)=> page + 1);
      // }}
      renderItem={({item: user, index}) => (
        <CardUser
          onPressUser={onPressUser}
          user={user}
          idx={index}
          //scrollY={scrollY}
          //colors
          iii={iii}
          background={background}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
        />
      )}
      keyExtractor={item => item.id.toString()}
      //   ListFooterComponent={
      //     data.length > (initialNumToRender ?? 0)
      //       ? ListFooter({
      //           allDataRendered,
      //           goToTop,
      //           showGotoTopButton,
      //         })
      //       : null
      //   }
      ListEmptyComponent={ListEmpty({
        hasError,
        onTryAgain,
        setIsSnackbarError,
        textError,
        loading,
      })}
    />
  );
}
