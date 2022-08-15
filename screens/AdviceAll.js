import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../constants';

const AdviceAll = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const [color, setColor] = useState('#78bef6');

  const [colorTag, setColorTag] = useState('#497a92');

  const [tagsOptions, setTagsOptions] = useState([
    {
      name: 'All',
      isSelected: true,
    },
    {
      name: 'Man',
      isSelected: false,
    },
    {
      name: 'Woman',
      isSelected: false,
    },
    {
      name: 'Kid',
      isSelected: false,
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 55,
          backgroundColor: color,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
          onPress={() => {
            goBack();
          }}>
          <Image
            source={images.arrow}
            style={{
              height: 22,
              width: 22,
              tintColor: '#497a92',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginStart: 20,
          }}>
          <Text
            style={{
              fontSize: 16.5,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Our Advice
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingStart: 8,
            paddingEnd: 18,
          }}
          onPress={() => {}}>
          <Icon name="shopping-cart" size={24} color={colorTag} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: color,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {tagsOptions.map(tag => (
          <TouchableOpacity
            key={tag.name}
            onPress={() => {
              let newtags = tagsOptions.map(tOptions => {
                return {
                  ...tOptions,
                  isSelected: tOptions == tag,
                };
              });
              setTagsOptions(newtags);
            }}>
            <View
              style={{
                height: 47,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginTop: 9,
                  fontSize: 15,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: tag.isSelected == true ? '#4b4b4b' : '#ffffff',
                }}>
                {tag.name}
              </Text>
            </View>
            <View
              style={{
                height: 4,
                width: '100%',
                backgroundColor: tag.isSelected == true ? colorTag : color,
              }}></View>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={{}}>
        <View style={{}}>
          <View
            style={{
              height: 190,
              backgroundColor: '#f7ffee',
            }}>
            <ImageBackground
              source={images.coatman}
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 126,
              }}
              resizeMode="contain"></ImageBackground>
            <View
              style={{
                position: 'absolute',
                left: 33,
                top: 60,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#1f0044',
                }}>
                Discover our sales
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#a2a2a2',
                }}>
                Start shoping!
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 190,
              backgroundColor: '#ff9e88',
            }}>
            <ImageBackground
              source={images.hatwoman}
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              resizeMode="contain"></ImageBackground>
            <View
              style={{
                position: 'absolute',
                left: 20,
                right: 20,
                top: 93,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: 'bold',
                  color: '#ffffff',
                  letterSpacing: 7,
                  textTransform: 'uppercase',
                }}>
                Ultimate collection
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#5f5f5f',
                  marginTop: 10,
                }}>
                From $138
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#ffffff',
            marginHorizontal: 15,
            height: 55,
            borderBottomColor: '#e2e6e6',
            borderBottomWidth: 2,
            borderLeftColor: '#e7eeee',
            borderLeftWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginHorizontal: 21,
            }}>
            <Icon name="search" size={25} color="#b4b4b4" />
          </View>

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: '500',
              marginHorizontal: 5,
            }}
            placeholder="Search a item..."
            placeholderTextColor={'#b4b4b4'}></TextInput>
        </View>

        <View
          style={{
            flex: 1,
            marginBottom: 8,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 280,
                width: '45%',
                marginStart: 15,
                marginEnd: 6,
                borderRadius: 8,
                borderLeftColor: '#e7eeee',
                borderLeftWidth: 1.5,
                borderRightColor: '#e7eeee',
                borderRightWidth: 1.5,
                borderTopColor: '#e7eeee',
                marginBottom: 1,
              }}>
              <ImageBackground
                source={images.shirtman}
                style={{
                  flex: 1,
                  backgroundColor: '#fff988',
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
                  Cassual Dresses
                </Text>
                <Text
                  style={{
                    marginTop: 3,
                    color: '#a2a2a2',
                    fontSize: 11,
                  }}>
                  $ 126.09
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 280,
                width: '45%',
                marginStart: 6,
                marginEnd: 15,
                borderRadius: 8,
                borderLeftColor: '#e7eeee',
                borderLeftWidth: 1.5,
                borderRightColor: '#e7eeee',
                borderRightWidth: 1.5,
                borderTopColor: '#e7eeee',
                marginBottom: 1,
              }}>
              <ImageBackground
                source={images.shirtwoman}
                style={{
                  flex: 1,
                  backgroundColor: '#93fff8',
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
                  Menswear
                </Text>
                <Text
                  style={{
                    marginTop: 3,
                    color: '#a2a2a2',
                    fontSize: 11,
                  }}>
                  $ 99.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdviceAll;
