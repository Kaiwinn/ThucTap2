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
import {useNavigation} from '@react-navigation/native';

const SlippersLong = props => {
  const navigation = useNavigation();

  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://i.imgur.com/ayfMOdH.png',
      name: 'Linzi Bonnie Faux',
      size: '3',
      price: 55,
      amount: 1,
    },
    {
      id: 2,
      url: 'https://i.imgur.com/Uof2Kea.png',
      name: 'Joe Browns Summer Heat',
      size: '3',
      price: 89,
      amount: 1,
    },
    {
      id: 3,
      url: 'https://i.imgur.com/fRfvXWQ.png',
      name: 'Ariat Brown Langdale',
      size: '3',
      price: 200,
      amount: 1,
    },
    {
      id: 4,
      url: 'https://i.imgur.com/qd2estP.png',
      name: 'AllSaints Dixie Metallic',
      size: '2',
      price: 299,
      amount: 1,
    },
  ]);

  const height = Dimensions.get('window').height;
  return (
    <View
      style={{
        flex: 1,
      }}>
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
            pro.id < 3 ? (
              <TouchableOpacity
                key={pro.id}
                pro={pro}
                onPress={() => {}}
                style={{
                  backgroundColor: '#9fe4a7',
                  height: 250,
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
                      color: '#36333f',
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
                      height: 30,
                      width: 30,
                      tintColor: '#fff',
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
          marginBottom: 50,
          flexDirection: 'row',
        }}>
        {product.map(pro =>
          pro.id > 2 && pro.id < 5 ? (
            <TouchableOpacity
              key={pro.id}
              pro={pro}
              onPress={() => {}}
              style={{
                backgroundColor: '#9fe4a7',
                height: 250,
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
                    color: '#36333f',
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
                    height: 30,
                    width: 30,
                    tintColor: '#fff',
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

export default SlippersLong;

const styles = StyleSheet.create({});
