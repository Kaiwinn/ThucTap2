import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UIHeadManOrWoman = () => {
  return (
    <View
      style={{
        backgroundColor: '#4a6471',
        height: 108,
      }}>
      <View
        style={{
          height: 50,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginTop: 15,
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
            marginHorizontal: 20,
          }}>
          You looking for?
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          flex: 1,
        }}>
        <View
          style={{
            height: 33,
            width: 115,
            backgroundColor: '#374b55',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 1,
            elevation: 1,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'white',
            }}>
            Man
          </Text>
        </View>
        <View
          style={{
            height: 33,
            width: 115,
            backgroundColor: '#374b55',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 1,
            elevation: 1,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'white',
            }}>
            Woman
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UIHeadManOrWoman;

const styles = StyleSheet.create({});
