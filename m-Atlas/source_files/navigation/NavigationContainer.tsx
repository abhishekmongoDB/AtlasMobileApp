// source_files/navigation/NavigationContainer.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/BeforeLogin/LoginScreen';
import MainTabNavigator from './TabNavigationContainer';

const Stack = createStackNavigator();

export const NavigationScreen = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
