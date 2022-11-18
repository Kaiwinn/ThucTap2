import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ShoppingCartIcon} from '../components';
import {images} from '../constants';
import {connect} from 'react-redux';
import StoreShope from './StoreShope';

const Product = props => {
  const widthHeight = useRef(new Animated.Value(35)).current;
  const animatedm = useRef(
    new Animated.ValueXY({
      x: -100,
      y: 120,
    }),
  ).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const zoomOut = () => {
    Animated.sequence([
      Animated.timing(widthHeight, {
        toValue: 10,
        duration: 1900,
        useNativeDriver: false,
      }),
      Animated.timing(widthHeight, {
        toValue: 35,
        duration: 10,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedMoved = e => {
    Animated.sequence([
      Animated.timing(animatedm, {
        toValue: {
          x: e.nativeEvent.pageX - 110,
          y: e.nativeEvent.pageX - 30,
        },
        duration: 0,
        useNativeDriver: false,
        // easing: Easing.linear,
      }),
      Animated.timing(animatedm, {
        toValue: {
          x: -300,
          y: 430,
        },
        duration: 1900,
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
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedM = e => {
    // console.log(e.nativeEvent);
    Animated.parallel([animatedMoved(e), fadeOut(), zoomOut()]).start();
  };

  const {addItemToCart, cartItems} = props;
  const {url} = props.route.params.product;
  const {product} = props.route.params;

  const [imgDot, setImgDot] = useState([{number: 0}, {number: 1}, {number: 2}]);

  const [imgActive, setImgActive] = useState(0);

  const onChanged = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  const screenWidth = Dimensions.get('window').width - 30;
  const [visiblely, setVisiblely] = useState(false);
  const closeModal = () => {
    setVisiblely(false);
  };

  useEffect(() => {});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e6e6e6',
      }}>
      <View
        style={{
          height: 55,
          backgroundColor: '#33424b',
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
              height: 25,
              width: 25,
              tintColor: '#0d1e2a',
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
            Checkout
          </Text>
        </View>

        <ShoppingCartIcon
          colorIcon="#fff"
          onPress={() => {
            setVisiblely(true);
          }}
        />
        <View>
          <StoreShope visible={visiblely} closeModal={() => closeModal()} />
        </View>
      </View>
      <View
        style={{
          height: 53,
          backgroundColor: '#33424b',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: 43,
              flex: 1,
              backgroundColor: '#0d1e2a',
              borderRadius: 4,
              marginEnd: 5,
              paddingStart: 5,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#ebeaea',
              }}>
              Add to wishlist
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={e => {
            animatedM(e);
            addItemToCart(product);
          }}>
          <View
            style={{
              height: 43,
              flex: 1,
              backgroundColor: '#ca8eeb',
              borderRadius: 4,
              marginStart: 5,
              paddingEnd: 5,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#ebeaea',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Add to Cart
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#e6e6e6',
          }}>
          <View
            style={{
              height: 350,
              marginVertical: 15,
              marginHorizontal: 15,
              backgroundColor: 'white',
              borderRadius: 8,
              elevation: 5,
            }}>
            <View
              style={{
                height: 280,
                borderRadius: 10,
                backgroundColor: '#e6e6e6',
              }}>
              <ScrollView
                onScroll={({nativeEvent}) => onChanged(nativeEvent)}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled>
                <View
                  style={{
                    height: 280,
                    width: screenWidth,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <ImageBackground
                    source={{
                      uri: url,
                    }}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"></ImageBackground>
                </View>
                <View
                  style={{
                    height: 280,
                    width: screenWidth,
                    backgroundColor: '#f0cfcf',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <ImageBackground
                    source={images.product1}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"></ImageBackground>
                </View>
                <View
                  style={{
                    height: 280,
                    width: screenWidth,
                    backgroundColor: '#83a2c5',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <ImageBackground
                    source={images.product1}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"></ImageBackground>
                </View>
              </ScrollView>
              <View
                style={{
                  position: 'absolute',
                  bottom: 13,
                  left: 25,
                  height: 40,
                  width: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {imgDot.map(img => (
                  <View
                    key={img.number}
                    style={{
                      height: 5,
                      width: 18,
                      marginHorizontal: 5,
                      backgroundColor:
                        imgActive == img.number ? '#5a99a5' : '#c0c0c0',
                    }}></View>
                ))}
              </View>
            </View>

            <View
              style={{
                flex: 1,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,

                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#343434',
                  fontWeight: 'bold',
                  marginStart: 20,
                  flex: 1,
                }}>
                Dress Pink
              </Text>
              <View
                style={{
                  height: 50,
                  width: 100,
                  backgroundColor: '#a5a5a5',
                  marginHorizontal: 20,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#f0f0f0',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  $605,00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 65,
              backgroundColor: 'white',
              marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 8,
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableWithoutFeedback>
              <View
                style={{
                  height: 50,
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: '#b9b9b9',
                  }}
                  source={images.plus}
                />
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={{
                marginStart: 10,
                color: '#4e4e4e',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Description
            </Text>
          </View>
          <View
            style={{
              height: 180,
              backgroundColor: 'white',
              marginHorizontal: 15,
              borderRadius: 8,
              elevation: 5,
              marginVertical: 15,
            }}>
            <View
              style={{
                height: 40,
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={images.coloring}
                style={{
                  height: 20,
                  width: 20,
                  marginHorizontal: 3,
                }}
              />
              <Text
                style={{
                  color: '#3c3c3c',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginHorizontal: 2,
                }}>
                Colour:
              </Text>
            </View>
            <View
              style={{
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#6a6a6a',
                }}>
                Choose a colour for item
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}>
              <View
                style={{
                  marginTop: 15,
                  height: 55,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#f0cfcf',
                    borderRadius: 8,
                    marginHorizontal: 5,
                    elevation: 2,
                  }}
                />
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#bb719b',
                    borderRadius: 8,
                    marginHorizontal: 5,
                    elevation: 2,
                  }}
                />
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#83a2c5',
                    borderRadius: 8,
                    marginHorizontal: 5,
                    elevation: 2,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
          source={images.cart}
          style={{
            height: 35,
            width: 35,
          }}
        />
      </Animated.View>
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
    addItemToCart: product => dispatch({type: 'ADD_PRODUCT', payload: product}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({});
