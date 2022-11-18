import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {UIFooterHome, UIHeader, ProductStore} from '../components/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {set} from 'react-native-reanimated';
import {connect} from 'react-redux';

const StoreShope = props => {
  const navigation = useNavigation();

  const [color, setColor] = useState('#f6846a');

  const [colorTag, setColorTag] = useState('#36494f');

  const {visible, closeModal, cartItems, removeItem} = props;
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const objects = cartItems;
    const sum = objects.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.amount * currentValue.price,
      0,
    );
    setTotalPrice(sum);
  });

  return (
    <Modal transparent visible={visible}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'rgba(38,38,38,0.3)',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: '#f6846a',
              flex: 0.83,
              elevation: 3,
            }}>
            <View>
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
                  onPress={() => {}}>
                  <Icon name="bars" size={25} color="#36494f" />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginStart: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      fontWeight: 'bold',
                    }}>
                    Your Cart
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 13,
                  }}
                  onPress={() => closeModal()}>
                  <Icon name="close" size={24} color="#36494f" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingStart: 8,
                    paddingEnd: 16,
                  }}
                  onPress={() => {}}>
                  <Icon name="tags" size={24} color={colorTag} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <ProductStore
                  productss={cartItems}
                  onPressDelete={removeItem}
                />
              </ScrollView>
            </View>
            <View
              style={{
                marginTop: 18,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: '700',
                }}>
                $ {totalPrice}
              </Text>
            </View>
            <View
              style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  closeModal();
                  navigation.navigate('CheckOut');
                }}>
                <View
                  style={{
                    height: 45,
                    width: 180,
                    backgroundColor: '#36494f',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                    elevation: 2,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    Proceed to checkout
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              closeModal();
            }}>
            <View
              style={{
                flex: 0.17,
              }}></View>
          </TouchableWithoutFeedback>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product => dispatch({type: 'REMOVE_PRODUCT', payload: product}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreShope);

const styles = StyleSheet.create({});
