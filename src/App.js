import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from './Router';
import FlashMessage from "react-native-flash-message";
import { colors } from './utils';
import { Provider, useSelector } from "react-redux";
import store from './redux';
import { Loading } from './components';
import { LogBox } from 'react-native';

const MainApp = () =>  {
  const stateGlobal = useSelector(state => state);
  console.log ('State Global :', stateGlobal);
  LogBox.ignoreLogs (["Setting a timer"]);
  return (
    <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
    {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store = {store}>
    <MainApp />
  </Provider>
  );
};

export default App;