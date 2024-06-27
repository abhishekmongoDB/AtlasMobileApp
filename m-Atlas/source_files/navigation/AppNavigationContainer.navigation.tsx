// https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '../../AppNavigation';

export default function AppNavigationContainer() {
  
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
