import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {isValidEmail, isValidPassword} from '../ultilies/Validations';

import {images} from '../constants';
const Login = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [email, setEmail] = useState('kaiwin@gmail.com');
  const [password, setPassword] = useState('123456');

  const isValidationOk = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  const [keyboardIsShown, setKeyboardIsShown] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: keyboardIsShown == false ? 0 : 5,
          flex: 0.3,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Image
          style={{
            position: 'absolute',
            right: 3,
            height: 180,
            width: 190,
            marginEnd: 3,
          }}
          source={images.noname}
        />
        <Text
          style={{
            width: '40%',
            color: '#469aa2',
            fontWeight: 'bold',
            fontSize: 24,
            marginStart: 15,
          }}>
          Already have an account?
        </Text>
        <Image
          style={{
            height: 100,
            width: 100,
            marginEnd: 8,
          }}
          source={images.ai}
        />
      </View>
      <View
        style={{
          marginTop: keyboardIsShown == false ? 0 : 10,
          flex: 0.3,
        }}>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#497e7e',
            }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in correct format',
              );
              setEmail(text);
            }}
            placeholder="Enter your email"
            placeholderTextColor={'#a2bfbf'}
            style={{
              fontSize: 16,
              color: '#36393a',
            }}
          />
          <View
            style={{
              height: 1,
              backgroundColor: '#7b928a',
            }}></View>
          <Text
            style={{
              color: '#d48989',
              fontSize: 15,
            }}>
            {errorEmail}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#497e7e',
            }}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 3 characters',
              );
              setPassword(text);
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={'#a2bfbf'}
            style={{
              fontSize: 16,
              color: '#36393a',
            }}
          />
          <View
            style={{
              height: 1,
              backgroundColor: '#7b928a',
            }}></View>
          <Text
            style={{
              color: '#d48989',
              fontSize: 15,
            }}>
            {errorPassword}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.17,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate('App');
          }}
          disabled={isValidationOk() == false}
          style={{
            marginTop: keyboardIsShown == false ? 5 : 88,
            height: 43,
            backgroundColor: isValidationOk() == false ? '#97b7a8' : '#53a096',
            width: '60%',
            alignSelf: 'center',
            elevation: 3,
            borderRadius: 23,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#f4f4f4',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        {keyboardIsShown == false && (
          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}
            style={{
              padding: 5.5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                color: '#91a5a1',
                fontSize: 14,
              }}>
              New user? Register now
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {keyboardIsShown == false && (
        <View
          style={{
            flex: 0.23,
          }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: '#a0a0a0',
              }}></View>
            <Text
              style={{
                padding: 5,
                color: '#4a4a4a',
                marginHorizontal: 5,
                fontSize: 14,
              }}>
              Use orther methods
            </Text>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: '#a0a0a0',
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                padding: 5,
              }}>
              <Image
                source={images.fb}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
              }}>
              <Image
                source={images.ggpink}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5.5,
              }}>
              <Image
                source={images.insta}
                style={{
                  height: 39,
                  width: 39,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
