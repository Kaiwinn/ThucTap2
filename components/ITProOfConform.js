import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {images} from '../constants';

const ITProOfConform = props => {
  const {
    onPressDelete,
    productss,
    addItemToCart,
    increaseItemToCart,
    decreaseItemToCart,
    setAmountToCart,
    removeItem,
  } = props;
  return (
    <View>
      {productss.map((product, index) => (
        <View
          key={product.id}
          style={{
            height: 91,
            backgroundColor: 'white',
            marginVertical: 10,
            marginHorizontal: 20,
            elevation: 5,
            paddingStart: 20,
            paddingEnd: 15,
            flexDirection: 'row',
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                position: 'absolute',
                right: 0,
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 11,
                  width: 11,
                  tintColor: '#c9c9c9',
                }}
                source={images.close2}
              />
            </View>
          </TouchableWithoutFeedback>

          <View
            style={{
              height: '100%',
              width: 90,
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
                source={{uri: product.url}}
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
              marginStart: 10,
              marginVertical: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              {product.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 20,
                  width: 65,
                  backgroundColor: '#e4e4e4',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#3a3a3a',
                    fontWeight: 'bold',
                  }}>
                  SIZE: {product.size}
                </Text>
              </View>
              <View
                style={{
                  marginStart: 5,
                  height: 20,
                  width: 55,
                  backgroundColor: '#e4e4e4',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#3a3a3a',
                    fontWeight: 'bold',
                  }}>
                  x{product.amount}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: 85,
              marginEnd: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: '#aeaeae',
              }}>
              $ {product.price}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product => dispatch({type: 'REMOVE_PRODUCT', payload: product}),
    increaseItemToCart: product =>
      dispatch({type: 'INCREASE_PRODUCT', payload: product}),
    decreaseItemToCart: product =>
      dispatch({type: 'DECREASE_PRODUCT', payload: product}),
    addItemToCart: product => dispatch({type: 'ADD_PRODUCT', payload: product}),
    setAmountToCart: product =>
      dispatch({type: 'SETAMOUNT_PRODUCT', payload: product}),
  };
};

export default connect(null, mapDispatchToProps)(ITProOfConform);

const styles = StyleSheet.create({});
