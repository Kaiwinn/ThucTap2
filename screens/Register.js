import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {isValidEmail, isValidPassword} from '../ultilies/Validations';

import {images} from '../constants';

const Register = props => {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRetypePassword, setErrorRetypePassword] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const isValidationOk = () =>
    email.length > 0 &&
    password.length > 0 &&
    retypePassword.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    retypePassword == password;
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#5adefc',
          paddingTop: 40,
        }}>
        <View
          style={{
            paddingBottom: 20,
            flex: 0.25,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image
            style={{
              position: 'absolute',
              right: 6,
              bottom: 8,
              height: 165,
              width: 180,
              marginEnd: 3,
              tintColor: '#fff',
            }}
            source={images.noname}
          />
          <Text
            style={{
              width: '40%',
              color: '#f4f4f4',
              fontWeight: 'bold',
              fontSize: 24,
              marginStart: 15,
            }}>
            Here's your first step with us !
          </Text>
          <Image
            style={{
              height: 110,
              width: 110,
              marginEnd: 10,
            }}
            source={images.ai}
          />
        </View>
        <View
          style={{
            marginTop: 8,
            flex: keyboardIsShown == false ? 0.55 : 0.75,
            backgroundColor: '#fff',
            marginHorizontal: 15,
            padding: 20,
            borderRadius: 10,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 15,
                color: '#497e7e',
              }}>
              Email
            </Text>
            <TextInput
              onChangeText={text => {
                setErrorEmail(
                  isValidEmail(text) == true
                    ? ''
                    : 'Email not in correct format',
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
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#497e7e',
              }}>
              Password
            </Text>
            <TextInput
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
          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#497e7e',
              }}>
              RetypePassword
            </Text>
            <TextInput
              onChangeText={text => {
                setErrorRetypePassword(
                  password == text ? '' : 'Retype Password not in correct',
                  setRetypePassword(text),
                );
              }}
              secureTextEntry={true}
              placeholder="Re-Enter your password"
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
              {errorRetypePassword}
            </Text>
          </View>
          <TouchableOpacity
            disabled={isValidationOk() == false}
            style={{
              marginTop: 8,
              height: 43,
              backgroundColor: isValidationOk() == true ? '#457b7e' : '#97b7a8',
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
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {keyboardIsShown == false && (
          <View
            style={{
              marginTop: 5,
              flex: 0.2,
              paddingBottom: 30,
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
                  color: '#4a4a4a',
                  fontSize: 14,
                  marginHorizontal: 5,
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
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
