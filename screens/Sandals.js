import {
  Animated,
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
import React, {useState, useRef, useEffect} from 'react';
import {UIHeader} from '../components';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sandals = props => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  const [product, setProduct] = useState([
    {
      id: 19,
      url: 'https://i.imgur.com/vjZAALF.png',
      name: 'Nike Oneonta Be True',
      size: '2',
      price: 455.1,
      amount: 1,
    },
    {
      id: 20,
      url: 'https://i.imgur.com/aPCwqZO.png',
      name: 'Nike Canyon M',
      size: '3',
      price: 322.22,
      amount: 1,
    },
    {
      id: 21,
      url: 'https://i.imgur.com/yPbS3HX.png',
      name: "Nike Sunray Protect 2'",
      size: '2',
      price: 156.1,
      amount: 1,
    },
    {
      id: 22,
      url: 'https://i.imgur.com/df825ij.png',
      name: 'Nike Air Max Koko',
      size: '3',
      price: 338.99,
      amount: 1,
    },
    {
      id: 23,
      url: 'https://i.imgur.com/aQh7DIz.png',
      name: 'Nike Vista',
      size: '3',
      price: 139,
      amount: 1,
    },
    {
      id: 24,
      url: 'https://i.imgur.com/Eyp5TvF.png',
      name: 'Nike Icon Classic',
      size: '3',
      price: 290,
      amount: 1,
    },
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
          x: id < 21 ? 220 : id < 23 ? 460 : 700,
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
      }}>
      <UIHeader
        colorOfWoman={'Sandals'}
        title="Sandals KW"
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
          height: height * 0.1,
          borderBottomColor: '#ececec',
          borderBottomWidth: 3,
        }}>
        <View
          style={{
            backgroundColor: '#e4e4e4',
            height: height * 0.065,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            marginTop: 10,
            marginHorizontal: 8,
          }}>
          <View
            style={{
              marginHorizontal: 21,
            }}>
            <Icon name="search" size={25} color="#776780" />
          </View>

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: '500',
              marginHorizontal: 5,
            }}
            placeholder="Search a item..."
            placeholderTextColor={'#776780'}></TextInput>
        </View>
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
                pro.id == 19
                  ? '#ecd9fe'
                  : pro.id == 20
                  ? '#d0e7f7'
                  : pro.id == 21
                  ? '#d9cffa'
                  : pro.id == 22
                  ? '#cdffc8'
                  : pro.id == 23
                  ? '#f2dada'
                  : pro.id == 24
                  ? '#fdffd5'
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
                bottom: 10,
                right: 10,
                padding: 11,
              }}
              onPress={e => {
                addItemToCart(pro);
                animatedM(e, pro.id);
              }}>
              <Image
                source={images.add_cart}
                style={{
                  tintColor: '#b687ef',
                  height: 28,
                  width: 28,
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
            source={images.add_cart}
            style={{
              tintColor: '#b687ef',
              height: 33,
              width: 33,
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
export default connect(mapStateToProps, mapDispatchToProps)(Sandals);

const styles = StyleSheet.create({});
