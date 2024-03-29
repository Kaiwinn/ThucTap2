import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {images} from '../constants';
import {CountDown} from 'react-native-customizable-countdown';
import {UIHeader} from '../components';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Shoes = props => {
  const [product, setProduct] = useState([
    {
      id: 13,
      url: 'https://i.imgur.com/TlgVku8.png',
      name: 'Nike Air DA1925-003',
      size: '2',
      price: 150.1,
      amount: 1,
    },
    {
      id: 14,
      url: 'https://i.imgur.com/OwR0Rix.png',
      name: 'Nike Air MaxSSS B.Gray',
      size: '3',
      price: 131.22,
      amount: 1,
    },
    {
      id: 15,
      url: 'https://i.imgur.com/7ejIyVm.png',
      name: "Nike Air Mx.C 'BG'",
      size: '2',
      price: 106.1,
      amount: 1,
    },
    {
      id: 16,
      url: 'https://i.imgur.com/XhZRWpY.png',
      name: 'Barely Rose',
      size: '3',
      price: 200.99,
      amount: 1,
    },
    {
      id: 17,
      url: 'https://i.imgur.com/tXWV1jB.png',
      name: 'Nike Forgot Name',
      size: '3',
      price: 89.99,
      amount: 1,
    },
    {
      id: 18,
      url: 'https://i.imgur.com/gTflGox.png',
      name: 'OZJI Casual',
      size: '3',
      price: 90,
      amount: 1,
    },
  ]);

  const width = Dimensions.get('window').width;

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
          x: id < 15 ? 220 : id < 17 ? 460 : 700,
          y: e.nativeEvent.pageX - 30,
        },
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(animatedm, {
        toValue: {
          x: -530,
          y: 250,
        },
        duration: 2000,
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

  const {navigation, route, cartItems, loadItemToCart, addItemToCart} = props;
  const {navigate, goBack} = navigation;

  return (
    <View style={{flex: 1}}>
      <UIHeader
        colorOfWoman={'Sneaker'}
        title="Sneaker KW"
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
          alignItems: 'center',
        }}>
        <CountDown
          initialSeconds={70}
          onTimeOut={() => {
            console.log('Time Out');
          }}
          digitFontSize={30}
          labelFontSize={20}
          width={300}
          height={100}
          activeInBackground={true}
          hoursLabel={'Come to'}
          minutesLabel={'out event'}
          secondsLabel={'KW'}
          enableLabel={true}
          hoursBackgroundStyle={{
            borderWidth: 0,
            backgroundColor: null,
          }}
          minutesBackgroundStyle={{
            borderWidth: 0,
            backgroundColor: null,
          }}
          secondsBackgroundStyle={{
            borderWidth: 0,
            backgroundColor: null,
          }}
          labelColor="#23a05d"
          labelFontWeight="bold"
          labelPosition="top"
          digitColor="#68dbaf"
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 5,
          marginBottom: 5,
        }}>
        {product.map(pro => (
          <TouchableOpacity
            key={pro.id}
            pro={pro}
            onPress={() => {}}
            style={{
              backgroundColor:
                pro.id == 13
                  ? '#a4efc0'
                  : pro.id == 14
                  ? '#a9efe6'
                  : pro.id == 15
                  ? '#cbcbcb'
                  : pro.id == 16
                  ? '#ffd2d2'
                  : pro.id == 17
                  ? '#dcc6ff'
                  : pro.id == 18
                  ? '#d7e3e1'
                  : '#afb4db',
              height: 235,
              width: width * 0.43,
              marginStart: pro.id % 2 == 1 ? width * 0.045 : width * 0.047,
              marginEnd: pro.id % 2 == 1 ? 0 : width * 0.045,
              borderRadius: 8,
              borderLeftColor: '#e7eeee',
              borderLeftWidth: 1.5,
              borderRightColor: '#e7eeee',
              borderRightWidth: 1.5,
              borderTopColor: '#e7eeee',
              marginBottom: 10,
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
                height: 73,
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
                bottom: 6,
                right: 3,
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
        ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Shoes);

const styles = StyleSheet.create({});
