import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';

const PriceContent = () => {
  const [value, setValue] = useState([48, 400]);
  return (
    <View>
      <Slider
        value={value}
        onValueChange={([value1, value2]) => {
          setValue([value1, value2]);
        }}
        thumbStyle={{
          backgroundColor: '#111',
          width: 10,
          height: 20,
          borderRadius: -5,
        }}
        animationType={'spring'}
        maximumValue={500}
        minimumValue={10}
        step={1}
      />

      <View
        style={{
          marginHorizontal: 30,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            height: 35,
            width: 90,
            backgroundColor: '#d0d0d0',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#909090',
              fontSize: 15,
            }}>
            $ {value[0]}
          </Text>
        </View>
        <View
          style={{
            height: 35,
            width: 90,
            backgroundColor: '#d0d0d0',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#909090',
              fontSize: 15,
            }}>
            $ {value[1]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PriceContent;

const styles = StyleSheet.create({});
