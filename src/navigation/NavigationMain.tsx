import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Register, UserDetails, UserList} from '../screens';
import {AuthContext} from '../context';
import SplashScreen from 'react-native-splash-screen';

export type RootStackMainParams = {
  Login: undefined;
  Register: undefined;
  UserList: undefined;
  UserDetails: {
    id: number;
  };
};

const Stack = createStackNavigator<RootStackMainParams>();

export function NavigationMain() {
  //globalContext
  const {isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn !== 'pending') {
      SplashScreen.hide();
    }
  }, [isLoggedIn]);

  if (isLoggedIn === 'pending') {
    return <></>;
  }
  return (
    <Stack.Navigator
      // initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: 'orange'},
      }}>
      {isLoggedIn === 'logout' && (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
      {isLoggedIn === 'login' && (
        <>
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
        </>
      )}
    </Stack.Navigator>
  );
}
