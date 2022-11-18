import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {images} from '../constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {connect} from 'react-redux';

const ProductStore = props => {
  const {
    onPressDelete,
    productss,
    addItemToCart,
    increaseItemToCart,
    decreaseItemToCart,
    setAmountToCart,
    removeItem,
  } = props;
  const [swipeableOpen, setSwipeableOpen] = useState(false);

  useEffect(() => {});

  return (
    <View>
      {productss.map((product, index) => (
        <View
          key={index}
          style={{
            marginVertical: 10,
          }}>
          <Swipeable
            renderLeftActions={() => {
              return (
                <TouchableOpacity onPress={() => onPressDelete(product)}>
                  <View
                    style={{
                      height: '100%',
                      width: 75,
                      backgroundColor: '#f9feff',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={images.delete}
                      style={{
                        height: 23,
                        width: 23,
                        tintColor: '#ff5555',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
            overshootLeft={false}
            onSwipeableWillOpen={() => {}}
            onSwipeableWillClose={() => {
              setSwipeableOpen(false);
            }}>
            <View onPress={() => {}}>
              <View
                style={{
                  backgroundColor: 'white',
                  elevation: 5,
                  paddingStart: 25,
                  paddingEnd: 15,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: 95,
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
                  }}>
                  <Text
                    // numberOfLines={1}
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    {product.name}
                  </Text>
                  <Text
                    style={{
                      color: '#a5a5a5',
                      fontSize: 14,
                      marginBottom: 5,
                    }}>
                    Size: {product.size}
                  </Text>
                  <Text
                    style={{
                      color: '#a5a5a5',
                      fontSize: 15,
                      fontWeight: '500',
                      marginTop: 2,
                    }}>
                    $ {product.price}
                  </Text>
                </View>
                <View
                  style={{
                    height: 95,
                    width: 50,
                    marginEnd: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 60,
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TextInput
                      keyboardType="numeric"
                      onChangeText={numeric => {
                        if (numeric > 0 || numeric == 0) {
                          let newCart = productss.map(pro => {
                            if (pro.id == product.id) {
                              setAmountToCart({...pro, amount: numeric});
                            } else {
                              return {...pro};
                            }
                          });
                        }
                      }}
                      onEndEditing={() => {
                        if (product.amount == 0) {
                          removeItem(product);
                        }
                      }}
                      style={{
                        paddingVertical: 15,
                        paddingHorizontal: 6,
                        color: 'black',
                        fontSize: 15,
                      }}
                      value={`${product.amount}`}
                    />
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          increaseItemToCart(product);
                        }}
                        style={{
                          paddingTop: 15,
                          paddingBottom: 5,
                          paddingStart: 5,
                          paddingEnd: 10,
                        }}>
                        <Image
                          source={images.next}
                          style={{
                            height: 15,
                            width: 15,
                            transform: [{rotate: '270deg'}],
                            tintColor: '#666666',
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        disabled={product.amount == 0}
                        onPress={() => {
                          decreaseItemToCart(product);
                        }}
                        style={{
                          paddingTop: 5,
                          paddingBottom: 15,
                          paddingStart: 5,
                          paddingEnd: 10,
                        }}>
                        <Image
                          source={images.next}
                          style={{
                            height: 15,
                            width: 15,
                            transform: [{rotate: '90deg'}],
                            tintColor:
                              product.amount == 1 ? '#737373' : '#444444',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Swipeable>
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

export default connect(null, mapDispatchToProps)(ProductStore);

const styles = StyleSheet.create({});
