import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  UIProfileDrawer,
  UIItemDrawer,
  UITagHeader,
  UIHeadManOrWoman,
} from '../components';
import {
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../constants';
import {Picker} from '@react-native-picker/picker';

import {PriceContent} from './index';

const DrawerRightContents = () => {
  const [colorOfUI, setColorOfUI] = useState([
    {color: '#000000'},
    {color: '#b3614e'},
    {color: '#eeeef0'},
    {color: '#1968ee'},
    {color: '#1eb0fe'},
    {color: '#84fff3'},
    {color: '#71d161'},
    // {color: '#9ad957'},
    // {color: '#d0e679'},
    // {color: '#ffe592'},
    // {color: '#ebab7f'},
    // {color: '#e37060'},
    // {color: '#ff5353'},
    // {color: '#ec65a1'},
    // {color: '#e093ec'},
    // {color: '#b363ff'},
  ]);
  const [colorOfUI2, setColorOfUI2] = useState([
    {color: '#9ad957'},
    {color: '#ffe592'},
    {color: '#e37060'},
    {color: '#ff5353'},
    {color: '#ec65a1'},
    {color: '#e093ec'},
    {color: '#b363ff'},
  ]);

  const [sizes, setSizes] = useState([
    {size: 'S'},
    {size: 'M'},
    {size: 'L'},
    {size: 'XL'},
  ]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 55,
          backgroundColor: '#38464f',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginStart: 30,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Filters
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
          onPress={() => {}}>
          <Image
            style={{
              height: 24,
              width: 24,
              tintColor: '#fff',
            }}
            source={images.adjust}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 30,
        }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              height: 48,
              backgroundColor: '#e4e3e6',
              borderRadius: 3,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginStart: 30,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#928e9e',
                flex: 1,
              }}>
              Brand
            </Text>
            <Image
              style={{
                height: 16,
                width: 16,
                marginHorizontal: 16,
                tintColor: '#928e9e',
              }}
              source={images.next}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          padding: 8,
        }}>
        <View
          style={{
            marginStart: 10,
            height: 38,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              marginHorizontal: 16,
              tintColor: '#38464f',
            }}
            source={images.coloring}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#38464f',
            }}>
            Colour
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 65,
          marginHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {colorOfUI.map(color => (
            <TouchableWithoutFeedback key={color.color}>
              <View
                style={{
                  padding: 3,
                }}>
                <View
                  style={{
                    height: 25.3,
                    width: 25.3,
                    backgroundColor: color.color,
                    borderRadius: 3,
                    elevation: 3,
                  }}></View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {colorOfUI2.map(color2 => (
            <TouchableWithoutFeedback key={color2.color}>
              <View
                style={{
                  padding: 3,
                }}>
                <View
                  style={{
                    height: 25.3,
                    width: 25.3,
                    backgroundColor: color2.color,
                    borderRadius: 3,
                    elevation: 3,
                  }}></View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          padding: 8,
        }}>
        <View
          style={{
            marginStart: 10,
            height: 38,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              marginHorizontal: 16,
              tintColor: '#38464f',
            }}
            source={images.dolla}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#38464f',
            }}>
            Price
          </Text>
        </View>
      </View>
      <PriceContent
        minValue={0}
        maxValue={100}
        onChangeMin={v => console.log(v)}
        onChangeMax={v => console.log(v)}
      />
      <View
        style={{
          marginHorizontal: 30,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            height: 35,
            width: 90,
            backgroundColor: '#d0d0d0',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#909090',
              fontSize: 15,
            }}>
            $ 48
          </Text>
        </View>
        <View
          style={{
            height: 35,
            width: 90,
            backgroundColor: '#d0d0d0',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#909090',
              fontSize: 15,
            }}>
            $ 60
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          padding: 8,
        }}>
        <View
          style={{
            marginStart: 10,
            height: 38,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              marginHorizontal: 16,
              tintColor: '#38464f',
            }}
            source={images.hanger}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#38464f',
            }}>
            Size
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 30,
          marginHorizontal: 30,
          flexDirection: 'row',
        }}>
        {sizes.map(size => (
          <View
            key={size.size}
            style={{
              height: 40,
              width: 40,
              margin: 7,
              borderRadius: 5,
              backgroundColor: '#b1b1b1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: '#111',
              }}>
              {size.size}
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          marginTop: 15,
          padding: 30,
        }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              height: 48,
              backgroundColor: '#e4e3e6',
              borderRadius: 3,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginStart: 30,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#928e9e',
                flex: 1,
              }}>
              Occasion
            </Text>
            <Image
              style={{
                height: 16,
                width: 16,
                marginHorizontal: 16,
                tintColor: '#928e9e',
              }}
              source={images.next}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default DrawerRightContents;

const styles = StyleSheet.create({});
