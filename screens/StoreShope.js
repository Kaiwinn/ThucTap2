import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {UIFooterHome, UIHeader, ProductStore} from '../components/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../constants';
const StoreShope = props => {
  const [listProduct, setListProduct] = useState([
    {
      id: 1,
      name: 'Muffin Dress',
      image: images.dress,
      size: 'S',
      price: 25,
      amount: 1,
    },
    {
      id: 2,
      name: 'Gorgeus Red Cap',
      image: images.cap,
      size: '7',
      price: 112,
      amount: 2,
    },
    {
      id: 3,
      name: 'Black Trainers',
      image: images.shoes_woman,
      size: '9.5',
      price: 78,
      amount: 1,
    },
  ]);

  const [color, setColor] = useState('#f6846a');

  const [colorTag, setColorTag] = useState('#36494f');

  const {visible, closeModal} = props;
  const [visibili, setVisibili] = useState(false);

  return (
    <Modal transparent visible={visible}>
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
                onPress={() => {
                  // setHintOptions(!hintOptions);
                  // if (hintOptions == true) {
                  //   setColorTag('#ffffff');
                  // } else if (hintOptions == false) {
                  //   setColorTag('#497a92');
                  // }
                }}>
                <Icon name="tags" size={24} color={colorTag} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            {listProduct.map(product => (
              <ProductStore
                key={product.id}
                image={product.image}
                name={product.name}
                size={product.size}
                price={product.price}
              />
            ))}
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
              $ 300,00
            </Text>
          </View>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableWithoutFeedback onPress={() => {}}>
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
      </View>
    </Modal>
  );
};

export default StoreShope;

const styles = StyleSheet.create({});
