import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../constants';
import {useState} from 'react';

const Settings = () => {
  const [isEnableLockApp, setEnableLockApp] = useState(true);
  const [isUseFingerprint, setUseFingerprint] = useState(true);
  const [isEnableChangePassword, setEnableChangePassword] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 55,
          backgroundColor: '#41c5d8',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Setting
        </Text>
      </View>
      <View style={{height: 115}}>
        <View
          style={{
            height: 35,
            backgroundColor: 'rgba(221,207,235,0.3)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 18,
            }}>
            Common
          </Text>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Language
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            English
          </Text>
          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Environment
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Production
          </Text>
          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
        </View>
      </View>

      <View style={{height: 155}}>
        <View
          style={{
            height: 35,
            backgroundColor: 'rgba(221,207,235,0.3)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 18,
            }}>
            Account
          </Text>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Phone number
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Email
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            backgroundColor: 'red',
          }}
          onPress={() => {}}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Sign out
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Image
            style={{
              marginHorizontal: 15,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 75}}>
        <View
          style={{
            height: 35,
            backgroundColor: 'rgba(221,207,235,0.3)',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 18,
            }}>
            Security
          </Text>
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Lock app in background
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Switch
            trackColor={{false: '#767577', true: '#cbb7e1'}}
            thumbColor={isEnableLockApp ? '#9750e4' : '#f4f3f4'}
            onValueChange={() => {
              setEnableLockApp(!isEnableLockApp);
            }}
            value={isEnableLockApp}
          />
        </View>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginStart: 10,
              width: 20,
              height: 20,
            }}
            source={images.ai}></Image>
          <Text
            style={{
              paddingStart: 10,
              color: 'black',
              fontSize: 20,
            }}>
            Use Finger
          </Text>
          <View
            style={{
              flex: 1,
            }}></View>

          <Switch
            trackColor={{false: '#767577', true: '#cbb7e1'}}
            thumbColor={isUseFingerprint ? '#9750e4' : '#f4f3f4'}
            onValueChange={() => {
              setUseFingerprint(!isUseFingerprint);
            }}
            value={isUseFingerprint}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
