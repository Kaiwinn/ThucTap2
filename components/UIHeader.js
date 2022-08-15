import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UITagHeader} from './index';
import {StoreShope} from '../screens';
import {useNavigation} from '@react-navigation/native';

const UIHeader = props => {
  const navigation = useNavigation();
  const {onPressZero, onPressOne, iconTwo, iconadjust, title, colorOfWoman} =
    props;
  const [tagOptions, setTagOptions] = useState([
    {
      id: 1,
      name: 'Advice',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Recent',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Popular',
      isSelected: true,
    },
  ]);

  const [hintOptions, setHintOptions] = useState(true);

  const [color, setColor] = useState('#78bef6');

  const [colorTag, setColorTag] = useState('#497a92');
  const [visiblely, setVisiblely] = useState(false);
  const closeModal = () => {
    setVisiblely(false);
  };

  return (
    <View style={{}}>
      <View
        style={{
          height: 55,
          backgroundColor: colorOfWoman == 'Woman' ? '#477572' : color,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
          onPress={onPressZero}>
          <Icon name="bars" size={25} color="#2f2f2f" />
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
            {title}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 13,
          }}
          onPress={() => {
            setVisiblely(true);
          }}>
          <Icon name="shopping-cart" size={24} color="#2f2f2f" />
          <View
            style={{
              height: 13,
              width: 20,
              backgroundColor: 'white',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              right: 1,
              top: 13,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 10,
                color: '#000',
              }}>
              3
            </Text>
          </View>
        </TouchableOpacity>
        {iconadjust != undefined && (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 13,
            }}
            onPress={onPressOne}>
            <Image
              source={iconadjust}
              style={{
                height: 24,
                width: 24,
                tintColor: '#2f2f2f',
              }}
            />
          </TouchableOpacity>
        )}
        {iconadjust == undefined && (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingStart: 8,
              paddingEnd: 16,
            }}
            onPress={() => {
              setHintOptions(!hintOptions);
              if (hintOptions == true) {
                setColorTag('#ffffff');
              } else if (hintOptions == false) {
                setColorTag('#497a92');
              }
            }}>
            <Icon name="tags" size={24} color={colorTag} />
          </TouchableOpacity>
        )}
      </View>
      {hintOptions == false && (
        <View
          style={{
            height: 50,
            backgroundColor: color,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {tagOptions.map(tagOption => (
            <UITagHeader
              key={tagOption.name}
              name={tagOption.name}
              isSelected={tagOption.isSelected}
              onPressOption={() => {
                let newTagOption = tagOptions.map(tags => {
                  return {
                    ...tags,
                    isSelected: tagOption == tags,
                  };
                });
                setTagOptions(newTagOption);
                if (tagOption.id == 1) {
                  navigation.navigate('AdviceAll');
                }
              }}
            />
          ))}
        </View>
      )}
      <View>
        <StoreShope visible={visiblely} closeModal={() => closeModal()} />
      </View>
    </View>
  );
};

export default UIHeader;

const styles = StyleSheet.create({});
