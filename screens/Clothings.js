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
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {UIHeader} from '../components';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShortFlowing from './ShortFlowing';
import ShortNearby from './ShortNearby';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Clothings = props => {
  const widthHeight = useRef(new Animated.Value(35)).current;
  const animatedm = useRef(
    new Animated.ValueXY({
      x: 220,
      y: 150,
    }),
  ).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const zoomOut = () => {
    Animated.sequence([
      Animated.timing(widthHeight, {
        toValue: 10,
        duration: 2300,
        useNativeDriver: false,
      }),
      Animated.timing(widthHeight, {
        toValue: 35,
        duration: 10,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedMoved = (e, id) => {
    Animated.sequence([
      Animated.timing(animatedm, {
        toValue: {
          x: id > 4 ? 220 : -85,
          y: e.nativeEvent.pageX - 30,
        },
        duration: 0,
        useNativeDriver: false,
        // easing: Easing.linear,
      }),
      Animated.timing(animatedm, {
        toValue: {
          x: -530,
          y: 250,
        },
        duration: id > 4 ? 1800 : 2000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2400,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedM = (e, id) => {
    Animated.parallel([animatedMoved(e, id), fadeOut(), zoomOut()]).start();
  };

  const {navigation, route, cartItems, loadItemToCart, addItemToCart} = props;
  const {navigate, goBack} = navigation;

  useEffect(() => {
    fetchCart();
  }, []);

  // const dispatch = useDispatch();
  const fetchCart = async () => {
    const exists = await AsyncStorage.getItem('Product');
    if (!exists) {
      await AsyncStorage.setItem('Product', JSON.stringify([]));
    } else {
      const data = JSON.parse(exists);
      loadItemToCart(data);
    }
  };

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
      id: 3,
      url: 'https://i.imgur.com/gsE8Iwo.png',
      name: 'Cassual Dresses',
      size: '2',
      price: 126.09,
      amount: 1,
    },
    {
      id: 4,
      url: 'https://i.imgur.com/zD2vlPK.png',
      name: 'Menswear',
      size: '3',
      price: 99.99,
      amount: 1,
    },
    {
      id: 5,
      url: 'https://i.imgur.com/hMEP0KA.png',
      name: 'Jeans Regular',
      size: '3',
      price: 36.19,
      amount: 1,
    },
    {
      id: 6,
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
                marginBottom: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                {product.map(pro =>
                  pro.id < 5 ? (
                    <TouchableOpacity
                      key={pro.id}
                      pro={pro}
                      onPress={() => {
                        navigation.navigate('Product', {
                          product: pro,
                          products: cartItems,
                        });
                      }}
                      style={{
                        backgroundColor: pro.id == 3 ? '#bcffa4' : '#a4dfff',
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
                          addItemToCart(pro);
                          animatedM(e, pro.id);
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
                pro.id > 4 && pro.id < 7 ? (
                  <TouchableOpacity
                    key={pro.id}
                    pro={pro}
                    onPress={() => {
                      navigation.navigate('Product', {
                        product: pro,
                        products: cartItems,
                      });
                    }}
                    style={{
                      backgroundColor: pro.id == 5 ? '#edb1ff' : '#a5b3e0',
                      height: 280,
                      width: '45%',
                      marginStart: pro.id == 5 ? 15 : 6,
                      marginEnd: pro.id == 5 ? 6 : 15,
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
                        right: 5,
                        padding: 10,
                      }}
                      onPress={e => {
                        addItemToCart(pro);
                        animatedM(e, pro.id);
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
              <Animated.View
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: animatedm.x,
                  marginStart: animatedm.y,
                  opacity: fadeAnim,
                  height: widthHeight,
                  width: widthHeight,
                }}>
                <Image
                  source={images.cart}
                  style={{
                    height: 35,
                    width: 35,
                  }}
                />
              </Animated.View>
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

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadItemToCart: product =>
      dispatch({type: 'LOAD_PRODUCT', payload: product}),

    addItemToCart: product => dispatch({type: 'ADD_PRODUCT', payload: product}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Clothings);

const styles = StyleSheet.create({});
