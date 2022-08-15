import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../constants';

const Product = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  const screenWidth = Dimensions.get('window').width - 30;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e6e6e6',
      }}>
      <View
        style={{
          height: 55,
          backgroundColor: '#33424b',
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
              height: 25,
              width: 25,
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
          height: 53,
          backgroundColor: '#33424b',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            height: 43,
            width: 185,
            backgroundColor: '#0c313b',
            borderRadius: 3,
            paddingStart: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ebeaea',
            }}>
            Add to wishlist
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 185,
            backgroundColor: '#f6846a',
            borderRadius: 3,
            paddingEnd: 10,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ebeaea',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Add to Cart
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#e6e6e6',
          }}>
          <View
            style={{
              height: 350,
              marginVertical: 15,
              marginHorizontal: 15,
              backgroundColor: 'white',
              borderRadius: 8,
              elevation: 5,
            }}>
            <View
              style={{
                height: 280,
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    height: 280,
                    width: screenWidth,
                    backgroundColor: '#f8f8f8',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <ImageBackground
                    source={images.product1}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"></ImageBackground>
                </View>
                <View
                  style={{
                    height: 280,
                    width: screenWidth,
                    backgroundColor: '#f0cfcf',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <ImageBackground
                    source={images.product1}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"></ImageBackground>
                </View>
                <View
                  style={{
                    height: 280,
                    width: screenWidth,
                    backgroundColor: '#83a2c5',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <ImageBackground
                    source={images.product1}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"></ImageBackground>
                </View>
              </ScrollView>
              <View
                style={{
                  position: 'absolute',
                  bottom: 25,
                  left: 20,
                  height: 40,
                  width: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 9,
                    width: 12,
                    marginHorizontal: 4,
                    tintColor: '#43d3d8',
                  }}
                  source={images.cross}
                />
                <Image
                  style={{
                    height: 9,
                    width: 12,
                    marginHorizontal: 4,
                    tintColor: '#43d3d8',
                  }}
                  source={images.cross}
                />
                <Image
                  style={{
                    height: 9,
                    width: 12,
                    marginHorizontal: 4,
                    tintColor: '#43d3d8',
                  }}
                  source={images.cross}
                />
              </View>
            </View>

            <View
              style={{
                flex: 1,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,

                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#343434',
                  fontWeight: 'bold',
                  marginStart: 20,
                  flex: 1,
                }}>
                Dress Pink
              </Text>
              <View
                style={{
                  height: 50,
                  width: 100,
                  backgroundColor: '#a5a5a5',
                  marginHorizontal: 20,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#f0f0f0',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  $605,00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 65,
              backgroundColor: 'white',
              marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 8,
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableWithoutFeedback>
              <View
                style={{
                  height: 50,
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: '#b9b9b9',
                  }}
                  source={images.plus}
                />
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={{
                marginStart: 10,
                color: '#4e4e4e',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Description
            </Text>
          </View>
          <View
            style={{
              height: 180,
              backgroundColor: 'white',
              marginHorizontal: 15,
              borderRadius: 8,
              elevation: 5,
              marginVertical: 15,
            }}>
            <View
              style={{
                height: 40,
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={images.coloring}
                style={{
                  height: 20,
                  width: 20,
                  marginHorizontal: 3,
                }}
              />
              <Text
                style={{
                  color: '#3c3c3c',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 2,
                }}>
                Colour:
              </Text>
            </View>
            <View
              style={{
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#6a6a6a',
                }}>
                Choose a colour for item
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}>
              <View
                style={{
                  marginTop: 15,
                  height: 55,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#f0cfcf',
                    borderRadius: 8,
                    marginHorizontal: 5,
                    elevation: 2,
                  }}
                />
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#bb719b',
                    borderRadius: 8,
                    marginHorizontal: 5,
                    elevation: 2,
                  }}
                />
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#83a2c5',
                    borderRadius: 8,
                    marginHorizontal: 5,
                    elevation: 2,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
