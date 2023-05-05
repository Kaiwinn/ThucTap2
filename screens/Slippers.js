import {
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
import React, {useState} from 'react';
import {
  SlippersChelsea,
  SlippersLong,
  UIHeader,
  SlippersLaceUp,
} from '../components';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const Slippers = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Ankle',
      isSelected: true,
    },
    {
      id: 2,
      name: 'Chelsea',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Long',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Lace up',
      isSelected: false,
    },
  ]);

  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://i.imgur.com/vbtjqHs.png',
      name: 'Sock Ankle Boots',
      size: '3',
      price: 44,
      amount: 1,
    },
    {
      id: 2,
      url: 'https://i.imgur.com/CZjpFns.png',
      name: 'Leather Chelsea Boots',
      size: '3',
      price: 59,
      amount: 1,
    },
    {
      id: 3,
      url: 'https://i.imgur.com/joy8Xc3.png',
      name: 'Ravel Sock Boots',
      size: '3',
      price: 65,
      amount: 1,
    },
    {
      id: 4,
      url: 'https://i.imgur.com/vEXhZm6.png',
      name: 'Leather Chunky Sole Chelsea',
      size: '3',
      price: 65,
      amount: 1,
    },
  ]);

  const height = Dimensions.get('window').height;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#d3d4ff',
      }}>
      <UIHeader
        colorOfWoman={'Slippers'}
        title="Slippers KW"
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
          marginTop: 15,
          height: height * 0.12,
          marginHorizontal: 20,
          marginRight: 130,
        }}>
        <Text
          style={{
            fontSize: 33,
            fontWeight: '700',
            color: '#000000',
          }}>
          The best fashion for you
        </Text>
      </View>
      <View
        style={{
          height: height * 0.1,
        }}>
        <View
          style={{
            backgroundColor: '#e4e4ff',
            height: height * 0.065,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            marginTop: 10,
            marginHorizontal: 8,
          }}>
          <View
            style={{
              marginLeft: 21,
              marginRight: 18,
            }}>
            <Icon name="search" size={25} color="#656565" />
          </View>

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: '500',
              marginHorizontal: 5,
            }}
            placeholder="Search a item..."
            placeholderTextColor={'#656565'}></TextInput>
        </View>
      </View>
      <View
        style={{
          height: 50,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              let newItems = items.map(itemN => {
                return {...itemN, isSelected: item.id == itemN.id};
              });
              setItems(newItems);
              if (item.id == 1) {
                let newItem2 = items.map(item2 => {
                  if (item2.id == 1) {
                    return {...item2, isSelected: true};
                  }
                  return {...item2, isSelected: false};
                });
                setItems(newItem2);
              } else if (item.id == '2') {
                let newItem3 = items.map(item3 => {
                  if (item3.id == 2) {
                    return {...item3, isSelected: true};
                  }
                  return {...item3, isSelected: false};
                });
                setItems(newItem3);
              } else if (item.id == '3') {
                let newItem3 = items.map(item3 => {
                  if (item3.id == 3) {
                    return {...item3, isSelected: true};
                  }
                  return {...item3, isSelected: false};
                });
                setItems(newItem3);
              }
            }}>
            <View
              style={{
                height: 31,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 16,
                borderRadius: 18,
                shadowColor: '#0c2d38',
                elevation: item.isSelected == true ? 30 : 0,
              }}>
              <Text
                style={{
                  color: item.isSelected == true ? '#007975' : '#70a0b0',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: item.isSelected == true ? '#007975' : '#d3d4ff',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                {'\u2022'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView>
          {items[0].isSelected == true ? (
            <View style={{}}>
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
                          backgroundColor: '#adc1c8',
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
                        backgroundColor: '#adc1c8',
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
          ) : items[1].isSelected == true ? (
            <SlippersChelsea />
          ) : items[2].isSelected == true ? (
            <SlippersLong />
          ) : items[3].isSelected == true ? (
            <SlippersLaceUp />
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};

export default Slippers;

const styles = StyleSheet.create({});
