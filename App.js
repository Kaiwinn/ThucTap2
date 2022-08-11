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
        title="ecoKaiwin"
        onPressZero={() => {
          navigation.openDrawer();
        }}
        onPressOne={() => {
          navigation.getParent().openDrawer();
        }}
        onPressAdvice={() => {
          alert('Ad');
        }}
      />
      <ScrollView>
        <UIFooterHome />
        <View
          style={{
            flex: 1,
            marginBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 280,
                width: '45%',
                marginStart: 15,
                marginEnd: 6,
                borderRadius: 8,
                borderLeftColor: '#e7eeee',
                borderLeftWidth: 1.5,
                borderRightColor: '#e7eeee',
                borderRightWidth: 1.5,
                borderTopColor: '#e7eeee',
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
              <View
                style={{
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#111',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  Cassual Dresses
                </Text>
                <Text
                  style={{
                    marginTop: 3,
                    color: '#a2a2a2',
                    fontSize: 12,
                  }}>
                  $ 126.09
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 280,
                width: '45%',
                marginStart: 6,
                marginEnd: 15,
                borderRadius: 8,
                borderLeftColor: '#e7eeee',
                borderLeftWidth: 1.5,
                borderRightColor: '#e7eeee',
                borderRightWidth: 1.5,
                borderTopColor: '#e7eeee',
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
              <View
                style={{
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#111',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  Menswear
                </Text>
                <Text
                  style={{
                    marginTop: 3,
                    color: '#a2a2a2',
                    fontSize: 12,
                  }}>
                  $ 99.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
