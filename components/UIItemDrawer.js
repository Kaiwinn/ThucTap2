import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {images} from '../constants';
import {UISubItemDrawer} from './index';
import {useNavigation} from '@react-navigation/native';

const UIItemDrawer = props => {
  const navigation = useNavigation();
  const {onPressMenu, name, isSelected, icon, sub_menus} = props;
  useEffect(() => {}, []);

  return (
    <View
      style={{
        backgroundColor: isSelected == true ? '#ebebeb' : '#ffffff',
      }}>
      <TouchableOpacity
        delayPress={0}
        onPress={onPressMenu}
        style={{
          padding: 15,
        }}>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
              tintColor: isSelected == true ? '#33c7b9' : '#7e8487',
            }}
            source={icon}
          />
          <Text
            style={{
              color: isSelected == true ? '#111' : '#525252',
              fontWeight: 'bold',
              fontSize: 16,
              textTransform: 'uppercase',
              flex: 1,
              marginStart: 20,
            }}>
            {name}
          </Text>
          {sub_menus != undefined && (
            <Image
              style={{
                width: isSelected == true ? 15 : 18,
                height: isSelected == true ? 15 : 18,
                tintColor: isSelected == true ? '#33c7b9' : '#7e8487',
              }}
              source={images.sub_menu}
            />
          )}
        </View>
      </TouchableOpacity>

      {isSelected == true && (
        <View
          style={{
            marginStart: 25,
            marginEnd: 10,
          }}>
          {sub_menus?.map(sub_menu => (
            <UISubItemDrawer
              onPressSub={() => {
                if (sub_menu?.name == 'T-shirt') {
                  navigation.navigate('App');
                } else if (sub_menu?.name == 'Shorts') {
                  navigation.navigate('Clothings');
                } else if (sub_menu?.name == 'Sneakers') {
                  navigation.navigate('Shoes');
                }
              }}
              key={sub_menu?.name}
              name={sub_menu?.name}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default UIItemDrawer;

const styles = StyleSheet.create({});
