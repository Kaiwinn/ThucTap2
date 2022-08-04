import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const UISubItemDrawer = props => {
  const {name} = props;
  return (
    <TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Text
          style={{
            color: '#adadad',
            fontWeight: 'bold',
            fontSize: 14,
            flex: 1,
            paddingVertical: 8,
            paddingStart: 25,
            paddingEnd: 5,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UISubItemDrawer;

const styles = StyleSheet.create({});
