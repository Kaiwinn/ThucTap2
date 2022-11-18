import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const Confirm = props => {
  const [listProduct, setListProduct] = useState([
    {
      id: 1,
      name: 'Muffin Dress',
      image: images.dress,
      size: 'S',
      price: 25,
      amount: 1,
    },
    {
      id: 2,
      name: 'Gorgeus Red Cap',
      image: images.cap,
      size: '7',
      price: 112,
      amount: 2,
    },
    {
      id: 3,
      name: 'Black Trainers',
      image: images.shoes_woman,
      size: '9.5',
      price: 78,
      amount: 1,
    },
  ]);
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const [btn, setBtn] = useState([
    {name: 'Add to Wishlist', isSelected: false},
    {name: 'Add to Cart', isSelected: true},
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ececec',
      }}>
      <View
        style={{
          height: 55,
          backgroundColor: '#f6846a',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
          onPress={() => {
            goBack();
          }}>
          <Image
            source={images.arrow}
            style={{
              height: 22,
              width: 22,
              tintColor: '#282f2f',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginStart: 20,
          }}>
          <Text
            style={{
              fontSize: 16.5,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Woman, Dresses
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: '#33424b',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#fff',
          }}>
          Your Order
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}>
          {listProduct.map(product => (
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
                    source={product.image}
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
                  width: 50,
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
          <View
            style={{
              height: 120,
              marginTop: 10,
              marginHorizontal: 20,
              backgroundColor: '#fff',
              elevation: 5,
            }}>
            <View
              style={{
                height: 70,
                marginHorizontal: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    flex: 1,
                    textTransform: 'uppercase',
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#303030',
                  }}>
                  Shipping and handling
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 118,
                    backgroundColor: '#4bc53d',
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      textTransform: 'uppercase',
                    }}>
                    Free Shipping
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#d0d0d0',
                }}></View>
            </View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  flex: 1,
                  textTransform: 'uppercase',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#303030',
                }}>
                Order total
              </Text>
              <View
                style={{
                  height: 40,
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#ff9b74',
                  }}>
                  $ 300, 00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 165,
              marginTop: 20,
              backgroundColor: 'white',
              marginHorizontal: 20,
              marginBottom: 10,
              elevation: 5,
            }}>
            <View
              style={{
                height: 65,
                backgroundColor: '#33424b',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 21,
                }}>
                Select a pay method
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Image
                style={{
                  height: 70,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={images.visa}
              />
              <Image
                style={{
                  height: 70,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={images.paypal}
              />
              <Image
                style={{
                  height: 70,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={images.amazon}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginBottom: 20,
              height: 1,
              marginHorizontal: 20,
              backgroundColor: '#d0d0d0',
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({});
