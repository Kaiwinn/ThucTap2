import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UIFooterHome, UIHeader} from './components/index';
import {Drawer} from './contents';
import {connect, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from './constants';

// import SplashScreen from 'react-native-splash-screen';

const App = props => {
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

  const animatedMoved = e => {
    Animated.sequence([
      Animated.timing(animatedm, {
        toValue: {
          x: 220,
          y: e.nativeEvent.pageX - 30,
        },
        duration: 0,
        useNativeDriver: false,
        // easing: Easing.linear,
      }),
      Animated.timing(animatedm, {
        toValue: {
          x: -400,
          y: 250,
        },
        duration: 2300,
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

  const animatedM = e => {
    // console.log(e.nativeEvent);
    Animated.parallel([animatedMoved(e), fadeOut(), zoomOut()]).start();
  };

  const {navigation, route, cartItems, loadItemToCart, addItemToCart} = props;

  const fetchCart = async () => {
    const exists = await AsyncStorage.getItem('Product');
    if (!exists) {
      await AsyncStorage.setItem('Product', JSON.stringify([]));
    } else {
      const data = JSON.parse(exists);
      loadItemToCart(data);
    }
  };

  const {navigate, goBack} = navigation;
  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://i.imgur.com/WXXuXeS.png',
      name: 'Cassual Dresses',
      size: '2',
      price: 126.09,
      amount: 1,
    },
    {
      id: 2,
      url: 'https://i.imgur.com/7YqOeJZ.png',
      name: 'Menswear',
      size: '3',
      price: 99.99,
      amount: 1,
    },
  ]);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f1f3f3',
      }}>
      <UIHeader
        title="ecoKaiwin"
        onPressZero={() => {
          navigation.openDrawer();
        }}
        onPressOne={() => {
          navigation.getParent().openDrawer();
        }}
        onPressAdvice={() => {}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UIFooterHome />
        <View
          style={{
            flex: 1,
            marginBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            {product.map(pro => (
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
                  backgroundColor: '#ffffff',
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
                      color: '#a2a2a2',
                      fontSize: 12,
                    }}>
                    $ {pro.price}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 3,
                    padding: 10,
                  }}
                  onPress={e => {
                    // setPageY(e.nativeEvent.pageX - 30);
                    addItemToCart(pro);
                    animatedM(e);
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({});
