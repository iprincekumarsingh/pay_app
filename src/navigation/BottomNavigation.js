import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/user/Home';
import Profile from '../screens/user/Profile';
import Setting from '../screens/user/Setting';
const Tab = createMaterialBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
        component={Home}
      />
     
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-alt" color={color} size={21} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={color}
              size={25}
            />
          ),
        }}
        name="More"
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
