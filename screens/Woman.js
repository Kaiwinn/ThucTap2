import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {UIHeader} from '../components';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const Woman = props => {
  const [typeDress, setTypeDress] = useState([
    {
      name: 'Shirt Dresses',
      isSelected: false,
    },
    {
      name: 'Work Dresses',
      isSelected: false,
    },
    {
      name: 'Cocktail Dresses',
      isSelected: true,
    },
    {
      name: 'Maxi Dresses',
      isSelected: false,
    },
  ]);

  const [tops, setTops] = useState([
    {name: 'Top Rated'},
    {name: 'Size: M'},
    {name: 'Spring'},
  ]);

  const [casual, setCasual] = useState(true);

  const [button, setButton] = useState([
    {
      name: 'Shirt Dresses',
      isSelected: false,
    },
    {
      name: 'Work Dresses',
      isSelected: false,
    },
    {
      name: 'Cocktail Dresses',
      isSelected: false,
    },
    {
      name: 'Maxi Dresses',
      isSelected: false,
    },
  ]);
  const [clWoman, setClWoman] = useState(undefined);

  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View>
      <UIHeader
        colorOfWoman={clWoman}
        title="Woman, Dresses"
        iconadjust={images.adjust}
        onPressZero={() => {
          navigation.openDrawer();
        }}
      />
      {casual == true && (
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              setCasual(false);
              setClWoman('Woman');
            }}>
            <View
              style={{
                height: 53,
                backgroundColor: '#78bef6',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#fff',
                  fontWeight: '500',
                  marginStart: 20,
                  flex: 1,
                }}>
                Cassual Dresses
              </Text>
              <Image
                source={images.next}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: '#fff',
                  marginHorizontal: 10,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#ffffff',
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
        </View>
      )}
      {casual == false && (
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              setCasual(true);
              setClWoman(undefined);
            }}>
            <View
              style={{
                height: 50,
                backgroundColor: '#477572',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#fff',
                  fontWeight: '500',
                  marginStart: 20,
                  flex: 1,
                }}>
                Cassual Dresses
              </Text>

              <Image
                source={images.sub_menu}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: '#fff',
                  marginHorizontal: 10,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              paddingVertical: 15,
              // height: 200,
              elevation: 10,
              backgroundColor: '#477572',
            }}>
            {typeDress.map(dress => (
              <TouchableOpacity key={dress.name}>
                <View
                  style={{
                    height: 38,
                    marginVertical: 5,
                    marginHorizontal: 20,
                    backgroundColor: '#3d5457',
                    borderRadius: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    {dress.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      <ScrollView>
        {casual == true && (
          <View
            style={{
              marginVertical: 40,
              height: 48,
              marginHorizontal: 50,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {tops.map(top => (
              <View
                style={{
                  height: 38,
                  width: 83,
                  borderRadius: 3,
                  backgroundColor: '#aaaaaa',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={top.name}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: -6,
                    top: -5,
                  }}>
                  <Image
                    style={{
                      height: 18,
                      width: 18,

                      tintColor: '#232323',
                    }}
                    source={images.cancel}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  {top.name}
                </Text>
              </View>
            ))}
          </View>
        )}
        <View
          style={{
            flex: 1,
            marginBottom: 50,
            marginTop: 10,
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
                    fontSize: 12,
                  }}>
                  $ 56.07
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
                    fontSize: 12,
                  }}>
                  $ 120.00
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: 30,
              marginBottom: 130,
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
                source={images.tshirt1}
                style={{
                  flex: 1,
                  backgroundColor: '#ffd6d6',
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
                    fontSize: 12,
                  }}>
                  $ 100.10
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
                source={images.tshirt2}
                style={{
                  flex: 1,
                  backgroundColor: '#f1dcff',
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
                    fontSize: 12,
                  }}>
                  $ 70.00
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Woman;

const styles = StyleSheet.create({});
