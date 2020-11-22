import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from './Router';
import FlashMessage from "react-native-flash-message";
import { colors } from './utils';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
    </>
  )
}