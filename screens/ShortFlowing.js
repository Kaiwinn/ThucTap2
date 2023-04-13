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

const ShortFlowing = props => {
  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://i.imgur.com/QJxxp1e_d.webp?maxwidth=760&fidelity=grand',
      name: "Men's Singlet",
      size: '3',
      price: 29.06,
      amount: 1,
    },
    {
      id: 2,
      url: 'https://i.imgur.com/wwyYVpc.png',
      name: "GN S'Sleep Set",
      size: '3',
      price: 99.99,
      amount: 1,
    },
    {
      id: 3,
      url: 'https://i.imgur.com/7VqAvvw.png',
      name: "Men's V-Neck",
      size: '2',
      price: 40,
      amount: 1,
    },
    {
      id: 4,
      url: 'https://i.imgur.com/FJqgQ6K.png',
      name: 'Goodnight Sleep Shorts',
      size: '2',
      price: 39.95,
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
                backgroundColor: pro.id == 1 ? '#ffcccc' : '#e0e0b2',
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
      <View
        style={{
          marginBottom: 160,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        {product.map(pro =>
          pro.id > 2 && pro.id < 5 ? (
            <TouchableOpacity
              key={pro.id}
              pro={pro}
              onPress={() => {}}
              style={{
                backgroundColor:
                  pro.id == 3 ? '#d8add6' : pro.id == 4 ? '#c2dda8' : '#000000',
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
                onPress={e => {}}>
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

export default ShortFlowing;

const styles = StyleSheet.create({});
