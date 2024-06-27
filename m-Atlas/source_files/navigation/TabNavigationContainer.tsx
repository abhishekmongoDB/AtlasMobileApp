
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cluster from '../screens/AfterLogin/Main/Cluster';
import AppOther from '../screens/AfterLogin/Main/AppOther';
import Dashboard from '../screens/AfterLogin/Main/Dashboard';
import Alert from '../screens/AfterLogin/Main/Alert';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from '../screens/AfterLogin/Main/Setting';
import GifExample from '../screens/AfterLogin/Main/Alert';
import Project from '../screens/AfterLogin/Main/Project';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2B664C",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
        }
      }}>

      <Tab.Screen
        name="Cluster"
        component={Project}
        options={{
          tabBarLabel: 'Cluster',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AppOther"
        component={AppOther}
        options={{
          tabBarLabel: 'App Other',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alert" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
      />


      <Tab.Screen
        name="Alert"
        component={GifExample}
        options={{
          tabBarLabel: 'Alert',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alert" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
