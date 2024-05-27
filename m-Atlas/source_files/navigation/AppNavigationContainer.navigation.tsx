// https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigation from './AppStackNavigation.navigation';

export default function AppNavigationContainer() {
  
  return (
    <>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </>
  );
}
