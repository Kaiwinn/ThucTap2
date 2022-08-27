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
  CheckOut,
  Confirm,
  Product,
  Login,
  Register,
} from '../screens/index';
import App from '../App';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContents, DrawerRightContents} from '../contents';

import {UIHeader} from '../components';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
const LeftDrawerScreen = () => {
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      backBehavior={'history'}
      drawerContent={props => <DrawerContents {...props} />}>
      <Drawer.Screen name="Login" component={Login} />
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
      <Drawer.Screen name="CheckOut" component={CheckOut} />
      <Drawer.Screen name="Confirm" component={Confirm} />
      <Drawer.Screen name="Product" component={Product} />
      <Drawer.Screen name="Register" component={Register} />
    </Drawer.Navigator>
  );
};

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={props => <DrawerRightContents {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};

const StackApp = () => {
  return (
    <NavigationContainer>
      <RightDrawerScreen />
    </NavigationContainer>
  );
};

export default StackApp;

const styles = StyleSheet.create({});
