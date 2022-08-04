import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {images} from '../constants';
const ProductStore = props => {
  const {image, name, size, price} = props;
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View
        style={{
          height: 95,
          backgroundColor: 'white',
          marginHorizontal: 20,
          marginVertical: 10,
          elevation: 5,
          paddingStart: 36,
          paddingEnd: 15,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '100%',
            width: 90,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 56,
              width: 56,
              borderRadius: 40,
              elevation: 8,
            }}>
            <Image
              source={image}
              style={{
                height: 56,
                width: 56,
                borderRadius: 40,
                backgroundColor: '#e8e8e8',
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: '#a5a5a5',
            }}>
            Size: {size}
          </Text>
          <Text>$ {price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductStore;

const styles = StyleSheet.create({});
