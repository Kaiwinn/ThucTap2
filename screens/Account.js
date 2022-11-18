import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../constants';

const Account = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#efe5ff',
      }}>
      <View
        style={{
          flex: 0.4,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#cf88fc',
            height: 133,
            width: 133,
            borderRadius: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.mom}
            style={{
              height: 125,
              width: 125,
              borderRadius: 80,
            }}
          />
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              color: '#1a012a',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Nguyễn Đức Chiến
          </Text>
        </View>
      </View>
      <Text>Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
