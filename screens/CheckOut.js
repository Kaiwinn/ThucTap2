import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const CheckOut = props => {
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
            Checkout
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingStart: 8,
            paddingEnd: 18,
          }}
          onPress={() => {}}>
          <Icon name="shopping-cart" size={24} color={'#111'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: '#33424b',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#ffffff',
          }}>
          Billing Details
        </Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 160,
              backgroundColor: '#ffffff',
              shadowColor: '#52006A',
              elevation: 9,
            }}>
            <ImageBackground
              source={{
                uri: 'https://indianembassy-tm.org/wp-content/uploads/2019/11/black.jpg',
              }}
              style={{
                flex: 1,
                opacity: 0.7,
              }}
              resizeMode="cover">
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 3,
                  top: 3,
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.close2}
                  style={{
                    height: 15,
                    width: 15,
                    tintColor: '#fff',
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 20,
                  height: 50,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 21,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Have a Coupon?
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 75,
                  height: 70,
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    marginStart: 18,
                    height: 45,
                    opacity: 0.5,
                    marginEnd: 8,
                  }}>
                  <TextInput
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: '500',
                      marginStart: 23,
                    }}
                    placeholder="Coupon Code here"
                    placeholderTextColor={'#fff'}></TextInput>
                </View>
                <TouchableOpacity
                  style={{
                    height: 45,
                    width: 105,
                    backgroundColor: '#bb9af0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginEnd: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#111',
                    }}>
                    APPLY
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e6e6e6',
            }}>
            <TouchableWithoutFeedback>
              <View
                style={{
                  marginTop: 25,
                  height: 55,
                  backgroundColor: '#fff',
                  marginHorizontal: 20,
                  marginBottom: 20,
                  borderRadius: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 5,
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: '500',
                    marginStart: 30,
                    color: '#cbcbcb',
                  }}>
                  Select a country
                </Text>

                <View
                  style={{
                    height: 55,
                    width: 55,
                    backgroundColor: '#33424b',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.sub_menu}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: '#fff',
                    }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>

            <View
              style={{
                height: 55,
                backgroundColor: '#fff',
                marginHorizontal: 20,
                marginBottom: 20,
                borderRadius: 3,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: 5,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '500',
                  marginStart: 30,
                }}
                placeholder="Full Name"
                placeholderTextColor={'#cbcbcb'}></TextInput>
            </View>
            <View
              style={{
                height: 55,
                backgroundColor: '#fff',
                marginHorizontal: 20,
                marginBottom: 20,
                borderRadius: 3,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: 5,
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '500',
                  marginStart: 30,
                  color: '#2b2b2b',
                }}>
                123 Kingdom Avenue
              </Text>
              <View
                style={{
                  height: 55,
                  width: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.check}
                  style={{
                    height: 18,
                    width: 18,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                height: 55,
                backgroundColor: '#fff',
                marginHorizontal: 20,
                marginBottom: 20,
                borderRadius: 3,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: 5,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '500',
                  marginStart: 30,
                }}
                placeholder="Address line two"
                placeholderTextColor={'#8a8a8a'}></TextInput>
            </View>
            <View
              style={{
                height: 55,
                backgroundColor: '#fff',
                marginHorizontal: 20,
                marginBottom: 20,
                borderRadius: 3,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: 5,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '500',
                  marginStart: 30,
                }}
                placeholder="Town/City"
                placeholderTextColor={'#8a8a8a'}></TextInput>
            </View>
            <View
              style={{
                height: 55,
                flexDirection: 'row',
                marginBottom: 20,
                width: '100%',
              }}>
              <View
                style={{
                  height: 55,
                  width: '46%',
                  backgroundColor: '#fff',
                  marginStart: 20,
                  marginEnd: 18,
                  borderRadius: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 5,
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: '500',
                    marginStart: 30,
                  }}
                  placeholder="Postcode/Zip"
                  placeholderTextColor={'#8a8a8a'}></TextInput>
              </View>
              <View
                style={{
                  height: 55,
                  backgroundColor: '#fff',
                  marginEnd: 20,
                  borderRadius: 3,
                  width: '40%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  elevation: 5,
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: '#2b2b2b',
                    fontWeight: 'bold',
                    marginStart: 25,
                  }}>
                  Phone
                </Text>
                <View
                  style={{
                    height: 55,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginEnd: 5,
                  }}>
                  <Image
                    source={images.close2}
                    style={{
                      height: 13,
                      width: 13,
                      tintColor: '#ff4f4f',
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                height: 50,
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigate('Confirm');
                }}>
                <View
                  style={{
                    height: 45,
                    width: 150,
                    borderRadius: 3,
                    backgroundColor: '#7e5ba2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: 'white',
                    }}>
                    Confirm
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({});
