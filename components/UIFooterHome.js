import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const UIFooterHome = () => {
  return (
    <View>
      <View
        style={{
          height: 250,
          backgroundColor: '#ffffff',
          shadowColor: '#52006A',
          elevation: 3,
        }}>
        <ImageBackground
          source={{
            uri: 'https://salt.tikicdn.com/cache/400x400/ts/product/4b/74/c8/7a2e6cade0d16fa1f67f647e00464b97.jpg?fbclid=IwAR2gX7BlQkW0DpjGteK0nIYd5Aj4hOXOhHAHKLp-ZD66HVPHEQ-IUxeZRzo',
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            marginEnd: 150,
          }}
          resizeMode="contain">
          <View
            style={{
              position: 'absolute',
              right: -70,
              top: 90,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#435a63',
              }}>
              New Collection
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#b2c6c9',
              }}>
              OUT NOW !
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 93,
              backgroundColor: '#bb9af0',
              borderRadius: 3,
              position: 'absolute',
              right: -70,
              bottom: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onHold={() => {
              alert('kkai');
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'white',
              }}>
              DISCOVER
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#ffffff',
          marginHorizontal: 15,
          height: 55,
          borderBottomColor: '#e2e6e6',
          borderBottomWidth: 2,
          borderLeftColor: '#e7eeee',
          borderLeftWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginHorizontal: 21,
          }}>
          <Icon name="search" size={25} color="#b4b4b4" />
        </View>

        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            fontWeight: '500',
            marginHorizontal: 5,
          }}
          placeholder="Search a item..."
          placeholderTextColor={'#b4b4b4'}></TextInput>
      </View>
      <View
        style={{
          marginVertical: 20,
          height: 55,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 2,
            width: 100,
            backgroundColor: '#b4b4b4',
            opacity: 0.5,
          }}></View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              color: '#333536',
              fontWeight: 'bold',
            }}>
            our popular products
          </Text>
        </View>
        <View
          style={{
            height: 2,
            width: 100,
            backgroundColor: '#b4b4b4',
            opacity: 0.5,
          }}></View>
      </View>
    </View>
  );
};

export default UIFooterHome;

const styles = StyleSheet.create({});
