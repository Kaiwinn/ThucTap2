import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
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

const DrawerContents = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  const [typeButtons, setTypeButton] = useState([
    {
      name: 'Clothing',
      icon: images.tshirt,
      isSelected: false,
      sub_menu: [
        {name: 'T-shirt', isChoice: false},
        {name: 'Shorts', isChoice: false},
      ],
    },
    {
      name: 'Shoes',
      icon: images.shoes,
      isSelected: false,
      sub_menu: [
        {name: 'Sneakers', isChoice: false},
        {name: 'Sandals', isChoice: false},
        {name: 'Boots', isChoice: false},
        {name: 'Slippers', isChoice: false},
      ],
    },
    {
      name: 'Sports',
      icon: images.hoodie,
      isSelected: false,
      sub_menu: [
        {name: 'Sports Shirt', isChoice: false},
        {name: 'Sport Shoes', isChoice: false},
      ],
    },
    {
      name: 'Bags & Accessory',
      icon: images.accessory,
      isSelected: false,
    },
  ]);
  const [btnSettings, setBtnSettings] = useState([
    {
      name: 'Account',
      icon: images.account,
      isSelected: false,
    },
    {
      name: 'Settings',
      icon: images.settings,
      isSelected: false,
    },
  ]);
  const [nested, setNested] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {/* <UIProfileDrawer /> */}
      <UIHeadManOrWoman
        onPressMan={() => {
          alert('man');
        }}
        onPressWoman={() => {
          navigate('Woman');
        }}
      />
      <DrawerContentScrollView style={{}}>
        {typeButtons.map(typeButton => (
          <UIItemDrawer
            key={typeButton.name}
            name={typeButton.name}
            icon={typeButton.icon}
            isSelected={typeButton.isSelected}
            sub_menus={typeButton?.sub_menu}
            onPressMenu={() => {
              let newTypeButtons = typeButtons.map(eachTypeButton => {
                return {
                  ...eachTypeButton,
                  isSelected: typeButton == eachTypeButton,
                };
              });
              setTypeButton(newTypeButtons);
              // refresh 2 item final
              let newButtonSettings = btnSettings.map(eachButtonSetting => {
                return {
                  ...eachButtonSetting,
                  isSelected: false,
                };
              });
              setBtnSettings(newButtonSettings);
            }}
          />
        ))}
        <View
          style={{
            height: 1,
            backgroundColor: '#a2a2a2',
            marginHorizontal: 13,
          }}></View>
        <View>
          {btnSettings.map(btnSetting => (
            <UIItemDrawer
              key={btnSetting.name}
              name={btnSetting.name}
              icon={btnSetting.icon}
              isSelected={btnSetting.isSelected}
              onPressMenu={() => {
                let newButtonSettings = btnSettings.map(eachButtonSetting => {
                  return {
                    ...eachButtonSetting,
                    isSelected: btnSetting == eachButtonSetting,
                  };
                });
                setBtnSettings(newButtonSettings);
                // refresh 4 item first
                let newTypeButtons = typeButtons.map(eachTypeButton => {
                  return {
                    ...eachTypeButton,
                    isSelected: false,
                  };
                });
                setTypeButton(newTypeButtons);
                if (btnSetting.name == 'Account') {
                  navigation.navigate('Account');
                } else if (btnSetting.name == 'Settings') {
                  navigation.navigate('Settings');
                }
              }}
            />
          ))}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContents;

const styles = StyleSheet.create({
  drawerItem: {
    paddingVertical: 5,
    flex: 1,
  },
});
