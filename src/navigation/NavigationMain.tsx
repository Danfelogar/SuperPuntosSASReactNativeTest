import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../screens';

export type RootStackMainParams = {
  // TabNavigation: undefined;
  // Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  // WebScreen: {
  //   idForIND: string;
  // };
};

const Stack = createStackNavigator<RootStackMainParams>();

export function NavigationMain() {
  return (
    <Stack.Navigator
      // initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: 'orange'},
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
