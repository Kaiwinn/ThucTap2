import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ProductStore = props => {
  const {image, name, size, price, products, id} = props;
  const [swipeableOpen, setSwipeableOpen] = useState(false);
  const leftAction = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          alert(`${name}`);
        }}>
        <View
          style={{
            height: 95,
            width: 75,
            backgroundColor: '#f9feff',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={images.delete}
            style={{
              height: 23,
              width: 23,
              tintColor: '#ff5555',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderLeftActions={leftAction}
      overshootLeft={false}
      onSwipeableWillOpen={() => {}}
      onSwipeableWillClose={() => {
        setSwipeableOpen(false);
      }}>
      <View onPress={() => {}}>
        <View
          style={{
            height: 95,
            backgroundColor: 'white',
            marginVertical: 10,
            elevation: 5,
            paddingStart: 25,
            paddingEnd: 15,
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: 90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 56,
                width: 56,
                borderRadius: 40,
                elevation: 8,
              }}>
              <Image
                source={image}
                style={{
                  height: 56,
                  width: 56,
                  borderRadius: 40,
                  backgroundColor: '#e8e8e8',
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginStart: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              {name}
            </Text>
            <Text
              style={{
                color: '#a5a5a5',
                fontSize: 14,
                marginBottom: 5,
              }}>
              Size: {size}
            </Text>
            <Text
              style={{
                color: '#a5a5a5',
                fontSize: 15,
                fontWeight: '500',
                marginTop: 2,
              }}>
              $ {price}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: 50,
              marginEnd: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 60,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: 'black',
                  margin: 8,
                }}>
                1
              </Text>
              <View>
                <TouchableOpacity
                  style={{
                    paddingTop: 15,
                    paddingBottom: 5,
                    paddingStart: 5,
                    paddingEnd: 10,
                  }}>
                  <Image
                    source={images.next}
                    style={{
                      height: 15,
                      width: 15,
                      transform: [{rotate: '270deg'}],
                      tintColor: '#666666',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingTop: 5,
                    paddingBottom: 15,
                    paddingStart: 5,
                    paddingEnd: 10,
                  }}>
                  <Image
                    source={images.next}
                    style={{
                      height: 15,
                      width: 15,
                      transform: [{rotate: '90deg'}],
                      tintColor: '#666666',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default ProductStore;

const styles = StyleSheet.create({});
