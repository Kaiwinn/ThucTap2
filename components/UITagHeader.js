import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const UITagHeader = props => {
  const {name, isSelected, onPressOption} = props;
  return (
    <TouchableOpacity
      onPress={onPressOption}
      style={{
        height: 33,
        width: 100,
        backgroundColor: isSelected == true ? '#ffffff' : '#78bef6',
        elevation: isSelected == true ? 5 : 0,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 14,
          color: '#497a92',
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default UITagHeader;

const styles = StyleSheet.create({});
