import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const UIProfileDrawer = () => {
  return (
    <View
      style={{
        padding: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 8,
        }}>
        <View
          style={{
            marginTop: 15,
          }}>
          <Avatar.Image
            source={{
              uri: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/294770254_803800604386714_3067147518904974457_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fofV6DtdcmgAX8pPiVx&_nc_ht=scontent.fsgn5-14.fna&oh=03_AVIKV6d_hGkjI5vvywTr6pkvL4PY_HPIQQWL6-j_Gwcafg&oe=630C7CF1',
            }}
          />
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 10,
          }}>
          <Title>Kaiwin61</Title>
          <Caption>@kaiwinneos</Caption>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Paragraph
            style={{
              fontWeight: 'bold',
            }}>
            20
          </Paragraph>
          <Caption
            style={{
              marginStart: 5,
            }}>
            Followers
          </Caption>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Paragraph
            style={{
              fontWeight: 'bold',
            }}>
            32
          </Paragraph>
          <Caption
            style={{
              marginStart: 5,
            }}>
            Following
          </Caption>
        </View>
      </View>
    </View>
  );
};

export default UIProfileDrawer;

const styles = StyleSheet.create({});
