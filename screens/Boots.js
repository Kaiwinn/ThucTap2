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
import {UIHeader} from '../components';
import {images} from '../constants';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Boots = props => {
  const [product, setProduct] = useState([
    {
      id: 25,
      url: 'https://i.imgur.com/Kb4WOyK.png',
      name: 'Nike Zoom Mercurial',
      size: '2',
      price: 110.0,
      amount: 1,
    },
    {
      id: 26,
      url: 'https://i.imgur.com/aTT3IZs.png',
      name: 'Nike Mercurial Vapor 15',
      size: '3',
      price: 50.5,
      amount: 1,
    },
    {
      id: 27,
      url: 'https://i.imgur.com/JMnnbJw.png',
      name: "phantom GX'",
      size: '2',
      price: 200.0,
      amount: 1,
    },
    {
      id: 28,
      url: 'https://i.imgur.com/Q3YoffQ.png',
      name: 'Mercurial Dream',
      size: '3',
      price: 450.99,
      amount: 1,
    },
    {
      id: 29,
      url: 'https://i.imgur.com/SLWyrDp.png',
      name: 'Mercurial Vapor 15',
      size: '3',
      price: 119.99,
      amount: 1,
    },
    {
      id: 30,
      url: 'https://i.imgur.com/t2pYi0W.png',
      name: 'Academy MG',
      size: '3',
      price: 150,
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
    <View
      style={{
        flex: 1,
        backgroundColor: '#fceceb',
      }}>
      <UIHeader
        colorOfWoman={'Boots'}
        title="Boots"
        iconadjust={images.adjust}
        onPressZero={() => {
          navigation.openDrawer();
        }}
        onPressOne={() => {
          navigation.getParent().openDrawer();
        }}
      />
      <Text
        style={{
          marginVertical: 5,
          alignSelf: 'center',
          fontSize: 16,
          color: '#1b1b1b',
          fontWeight: 'bold',
        }}>
        Boots
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: '#bdbdbd',
          marginHorizontal: 180,
          marginTop: 3,
          marginBottom: 6,
        }}></View>
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
              backgroundColor: '#f1c8f6',
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
export default connect(mapStateToProps, mapDispatchToProps)(Boots);

const styles = StyleSheet.create({});
