import {View, Text} from 'react-native';
import React from 'react';

import useUserList from './useUserList';

export function UserList() {
  const {userListData} = useUserList();
  console.log({userListData});
  return (
    <View>
      <Text>UserList</Text>
    </View>
  );
}
