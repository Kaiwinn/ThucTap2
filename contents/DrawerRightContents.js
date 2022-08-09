import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  UIProfileDrawer,
  UIItemDrawer,
  UITagHeader,
  UIHeadManOrWoman,
} from '../components';
import {
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../constants';
import {Picker} from '@react-native-picker/picker';

const DrawerRightContents = () => {
  return (
    <View>
      <Text>DrawerRightContents</Text>
    </View>
  );
};

export default DrawerRightContents;

const styles = StyleSheet.create({});
