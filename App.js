import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UIFooterHome, UIHeader} from './components/index';
import {Drawer} from './contents';

const App = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f1f3f3',
      }}>
      <UIHeader
        onPressZero={() => {
          navigation.openDrawer();
        }}
        onPressOne={() => {
          alert('One');
        }}
        iconTwo="shopping-cart"
      />
      <ScrollView>
        <UIFooterHome />
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 220,
                width: '45%',
                marginStart: 15,
                marginEnd: 6,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderLeftColor: '#e7eeee',
                borderLeftWidth: 1.5,
                borderRightColor: '#e7eeee',
                borderRightWidth: 1.5,
                marginBottom: 1,
              }}>
              <ImageBackground
                source={{
                  uri: 'https://is4.revolveassets.com/images/p4/n/z/MALR-WK205_V1.jpg',
                }}
                style={{
                  flex: 1,
                }}
                resizeMode="contain"></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 220,
                width: '45%',
                marginStart: 6,
                marginEnd: 15,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderLeftColor: '#e7eeee',
                borderLeftWidth: 1.5,
                borderRightColor: '#e7eeee',
                borderRightWidth: 1.5,
                marginBottom: 1,
              }}>
              <ImageBackground
                source={{
                  uri: 'https://i.pinimg.com/originals/30/a7/41/30a741ba522ba1333de01eb6eed66393.jpg',
                }}
                style={{
                  flex: 1,
                }}
                resizeMode="contain"></ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
