import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constants';

const ShortNearby = props => {
  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://i.imgur.com/KfcdiMv.png',
      name: 'Jeans Slim Black',
      size: '3',
      price: 29.06,
      amount: 1,
    },
    {
      id: 2,
      url: 'https://i.imgur.com/tCm47Fk.png',
      name: 'Relax fit Black',
      size: '3',
      price: 99.99,
      amount: 1,
    },
  ]);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View>
      <View
        style={{
          height: 50,
          marginLeft: 20,
        }}></View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        {product.map(pro =>
          pro.id < 3 ? (
            <TouchableOpacity
              key={pro.id}
              pro={pro}
              onPress={() => {}}
              style={{
                backgroundColor: pro.id == 1 ? '#f1dcf6' : '#d6f0f0',
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
  );
};

export default ShortNearby;

const styles = StyleSheet.create({});
