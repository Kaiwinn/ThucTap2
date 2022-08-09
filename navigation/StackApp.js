import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Clothings,
  Shoes,
  Sports,
  BagsAndAccessory,
  Account,
  Settings,
  AdviceAll,
  Woman,
} from '../screens/index';
import App from '../App';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContents} from '../contents';

import {UIHeader} from '../components';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="App"
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <DrawerContents {...props} />}>
        <Drawer.Screen name="App" component={App} />
        <Drawer.Screen name="Clothings" component={Clothings} />
        <Drawer.Screen name="Shoes" component={Shoes} />
        <Drawer.Screen name="Sports" component={Sports} />
        <Drawer.Screen name="BagsAndAccessory" component={BagsAndAccessory} />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="AdviceAll" component={AdviceAll} />
        <Drawer.Screen name="UIHeader" component={UIHeader} />
        <Drawer.Screen name="Woman" component={Woman} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;

const styles = StyleSheet.create({});
