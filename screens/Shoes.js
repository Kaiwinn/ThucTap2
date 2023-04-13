import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constants';

const Shoes = () => {
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
  ]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginTop: 10,
        }}>
        {product.map(pro => (
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
              backgroundColor: pro.id == 1 ? 'yellow' : '#a4d2ff',
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
        ))}
        {/* <Animated.View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: animatedm.x,
              // marginStart: animatedm.y,
              // opacity: fadeAnim,
              // height: widthHeight,
              // width: widthHeight,
            }}>
            <Image
              source={images.cart}
              style={{
                height: 35,
                width: 35,
              }}
            />
          </Animated.View> */}
      </View>
    </View>
  );
};

export default Shoes;

const styles = StyleSheet.create({});
