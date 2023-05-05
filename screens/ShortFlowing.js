import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {images} from '../constants';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const ShortFlowing = props => {
  const [product, setProduct] = useState([
    {
      id: 7,
      url: 'https://i.imgur.com/QJxxp1e_d.webp?maxwidth=760&fidelity=grand',
      name: "Men's Singlet",
      size: '3',
      price: 29.06,
      amount: 1,
    },
    {
      id: 8,
      url: 'https://i.imgur.com/wwyYVpc.png',
      name: "GN S'Sleep Set",
      size: '3',
      price: 99.99,
      amount: 1,
    },
    {
      id: 9,
      url: 'https://i.imgur.com/7VqAvvw.png',
      name: "Men's V-Neck",
      size: '2',
      price: 40,
      amount: 1,
    },
    {
      id: 10,
      url: 'https://i.imgur.com/FJqgQ6K.png',
      name: 'Goodnight Sleep Shorts',
      size: '2',
      price: 39.95,
      amount: 1,
    },
  ]);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [tops, setTops] = useState([
    {name: 'Top Rated'},
    {name: 'Size: M'},
    {name: 'Spring'},
  ]);

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
          x: id > 8 ? 220 : -85,
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
        duration: id > 8 ? 1800 : 2000,
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

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const exists = await AsyncStorage.getItem('Product');
    if (!exists) {
      await AsyncStorage.setItem('Product', JSON.stringify([]));
    } else {
      const data = JSON.parse(exists);
      loadItemToCart(data);
    }
  };

  const {route, cartItems, loadItemToCart, addItemToCart} = props;
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          marginVertical: 20,
          height: 48,
          marginHorizontal: 40,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {tops.map(top => (
          <View
            style={{
              height: 38,
              width: 83,
              marginHorizontal: 10,
              borderRadius: 3,
              backgroundColor: '#aaaaaa',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={top.name}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: -6,
                top: -5,
              }}>
              <Image
                style={{
                  height: 18,
                  width: 18,

                  tintColor: '#232323',
                }}
                source={images.cancel}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: 'white',
              }}>
              {top.name}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        {product.map(pro =>
          pro.id < 9 ? (
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
                backgroundColor: pro.id == 7 ? '#ffcccc' : '#e0e0b2',
                height: 280,
                width: '45%',
                marginStart: pro.id == 7 ? 15 : 6,
                marginEnd: pro.id == 7 ? 6 : 15,
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
      <View
        style={{
          marginBottom: 160,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        {product.map(pro =>
          pro.id > 8 && pro.id < 11 ? (
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
                backgroundColor:
                  pro.id == 9
                    ? '#d8add6'
                    : pro.id == 10
                    ? '#c2dda8'
                    : '#000000',
                height: 280,
                width: '45%',
                marginStart: pro.id == 9 ? 15 : 6,
                marginEnd: pro.id == 9 ? 6 : 15,
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
export default connect(mapStateToProps, mapDispatchToProps)(ShortFlowing);

const styles = StyleSheet.create({});
