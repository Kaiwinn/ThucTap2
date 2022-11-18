import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

const ShoppingCartIcon = props => {
  const {cartItems, onPress, colorIcon} = props;

  const [lengthOfCartItems, setLengthCartItems] = useState(0);

  useEffect(() => {
    const objects = cartItems;
    const sum = objects.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0,
    );
    setLengthCartItems(sum);
  });
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 11,
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingStart: 8,
          paddingEnd: 18,
        }}
        onPress={onPress}>
        <Icon name="shopping-cart" size={24} color={colorIcon} />
        <View
          style={{
            height: 13,
            width: 20,
            backgroundColor: '#bef8fa',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            right: 1,
            top: -4,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 10,
              color: '#111',
              fontWeight: 'bold',
            }}>
            {lengthOfCartItems}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

export default connect(mapStateToProps)(ShoppingCartIcon);

const styles = StyleSheet.create({});
