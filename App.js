import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from  'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/Facebook'
import Instagram from './screens/Instagram';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: Facebook},
  Instagram: {screen: Instagram},
});

const AppContainer = createAppContainer (TabNavigator);