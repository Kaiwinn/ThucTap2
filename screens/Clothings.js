import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {UIHeader} from '../components';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShortFlowing from './ShortFlowing';
import ShortNearby from './ShortNearby';

const Clothings = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  const [items, setItems] = useState([
    {
      id: 1,
      name: 'hot',
      isSelected: true,
    },
    {
      id: 2,
      name: 'fllowing',
      isSelected: false,
    },
    {
      id: 3,
      name: 'nearby',
      isSelected: false,
    },
  ]);

  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://i.imgur.com/gsE8Iwo.png',
      name: 'Cassual Dresses',
      size: '2',
      price: 126.09,
      amount: 1,
    },
    {
      id: 2,
      url: 'https://i.imgur.com/zD2vlPK.png',
      name: 'Menswear',
      size: '3',
      price: 99.99,
      amount: 1,
    },
    {
      id: 3,
      url: 'https://i.imgur.com/hMEP0KA.png',
      name: 'Jeans Regular',
      size: '3',
      price: 36.19,
      amount: 1,
    },
    {
      id: 4,
      url: 'https://i.imgur.com/mZkjDiD.png',
      name: 'Jeans Slim',
      size: '3',
      price: 20.99,
      amount: 1,
    },
  ]);

  const screenHeight = Dimensions.get('window').height;

  return (
    <View>
      <UIHeader
        title="Short"
        iconadjust={images.adjust}
        onPressZero={() => {
          navigation.openDrawer();
        }}
        onPressOne={() => {
          navigation.getParent().openDrawer();
        }}
      />
      <View>
        <View
          style={{
            height: 50,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                let newItems = items.map(itemN => {
                  return {...itemN, isSelected: item.id == itemN.id};
                });
                setItems(newItems);
                if (item.id == 1) {
                  let newItem2 = items.map(item2 => {
                    if (item2.id == 1) {
                      return {...item2, isSelected: true};
                    }
                    return {...item2, isSelected: false};
                  });
                  setItems(newItem2);
                } else if (item.id == '2') {
                  let newItem3 = items.map(item3 => {
                    if (item3.id == 2) {
                      return {...item3, isSelected: true};
                    }
                    return {...item3, isSelected: false};
                  });
                  setItems(newItem3);
                } else if (item.id == '3') {
                  let newItem3 = items.map(item3 => {
                    if (item3.id == 3) {
                      return {...item3, isSelected: true};
                    }
                    return {...item3, isSelected: false};
                  });
                  setItems(newItem3);
                }
              }}>
              <View
                style={{
                  height: 31,
                  backgroundColor:
                    item.isSelected == true ? '#569cb4' : '#f1f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  borderRadius: 18,
                  shadowColor: '#0c2d38',
                  elevation: item.isSelected == true ? 30 : 0,
                }}>
                <Text
                  style={{
                    color: item.isSelected == true ? 'white' : '#111',
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView>
        {items[0].isSelected == true ? (
          <View style={{}}>
            <View
              style={{
                height: 250,
              }}>
              <ImageBackground
                source={{
                  uri: 'https://i.imgur.com/1Pc0KEm.png',
                }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginEnd: 180,
                }}
                resizeMode="contain">
                <View
                  style={{
                    position: 'absolute',
                    right: -135,
                    top: 70,
                  }}>
                  <Text
                    style={{
                      fontSize: 21,
                      fontWeight: 'bold',
                      color: '#d65eef',
                    }}>
                    Relaxed fit throughout
                  </Text>
                  <Text
                    style={{
                      fontSize: 19,
                      fontWeight: 'bold',
                      color: '#d0b6d5',
                      marginStart: 5,
                    }}>
                    Sits at your waist
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                // flex: 1,
                marginBottom: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                {product.map(pro =>
                  pro.id < 3 ? (
                    <TouchableOpacity
                      key={pro.id}
                      pro={pro}
                      onPress={() => {
                        // navigation.navigate('Product', {
                        //   product: pro,
                        //   products: cartItems,
                        // });
                      }}
                      style={{
                        backgroundColor: pro.id == 1 ? '#bcffa4' : '#a4dfff',
                        height: 280,
                        width: '45%',
                        marginStart: pro.id == 1 ? 15 : 6,
                        marginEnd: pro.id == 1 ? 6 : 15,
                        borderRadius: 8,
                        borderLeftColor: '#e7eeee',
                        borderLeftWidth: 1.5,
                        borderRightColor: '#e7eeee',
                        borderRightWidth: 1.5,
                        borderTopColor: '#e7eeee',
                        marginBottom: 1,
                      }}>
                      <ImageBackground
                        source={{
                          uri: pro.url,
                        }}
                        style={{
                          flex: 1,
                        }}
                        resizeMode="contain"></ImageBackground>
                      <View
                        style={{
                          height: 60,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#111',
                            fontSize: 13,
                            fontWeight: 'bold',
                          }}>
                          {pro.name}
                        </Text>
                        <Text
                          style={{
                            marginTop: 3,
                            color: '#737779',
                            fontSize: 12,
                          }}>
                          $ {pro.price}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                        }}
                        onPress={e => {
                          // addItemToCart(pro);
                          // animatedM(e);
                        }}>
                        <Image
                          source={images.cart}
                          style={{
                            height: 25,
                            width: 25,
                          }}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  ) : null,
                )}
              </View>
            </View>
            <View
              style={{
                marginTop: 5,
                marginBottom: 150,
                flexDirection: 'row',
              }}>
              {product.map(pro =>
                pro.id > 2 && pro.id < 5 ? (
                  <TouchableOpacity
                    key={pro.id}
                    pro={pro}
                    onPress={() => {}}
                    style={{
                      backgroundColor: pro.id == 3 ? '#edb1ff' : '#a5b3e0',
                      height: 280,
                      width: '45%',
                      marginStart: pro.id == 3 ? 15 : 6,
                      marginEnd: pro.id == 3 ? 6 : 15,
                      borderRadius: 8,
                      borderLeftColor: '#e7eeee',
                      borderLeftWidth: 1.5,
                      borderRightColor: '#e7eeee',
                      borderRightWidth: 1.5,
                      borderTopColor: '#e7eeee',
                      marginBottom: 1,
                    }}>
                    <ImageBackground
                      source={{
                        uri: pro.url,
                      }}
                      style={{
                        flex: 1,
                      }}
                      resizeMode="contain"></ImageBackground>
                    <View
                      style={{
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#111',
                          fontSize: 13,
                          fontWeight: 'bold',
                        }}>
                        {pro.name}
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          color: '#737779',
                          fontSize: 12,
                        }}>
                        $ {pro.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                      }}
                      onPress={e => {
                        // addItemToCart(pro);
                        // animatedM(e);
                      }}>
                      <Image
                        source={images.cart}
                        style={{
                          height: 25,
                          width: 25,
                        }}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                ) : null,
              )}
            </View>
          </View>
        ) : items[1].isSelected == true ? (
          <ShortFlowing />
        ) : items[2].isSelected == true ? (
          <ShortNearby />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Clothings;

const styles = StyleSheet.create({});
