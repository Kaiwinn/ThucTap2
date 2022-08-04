import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UITagHeader} from './index';
import {StoreShope} from '../screens';

const UIHeader = props => {
  const {onPressZero, onPressOne, iconTwo} = props;
  const [tagOptions, setTagOptions] = useState([
    {
      name: 'Advice',
      isSelected: false,
    },
    {
      name: 'Recent',
      isSelected: false,
    },
    {
      name: 'Popular',
      isSelected: true,
    },
  ]);

  const [hintCloss, setHintCloss] = useState(true);
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
          backgroundColor: color,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
          onPress={onPressZero}>
          <Icon name="bars" size={25} color="#497a92" />
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
            ecoKaiwin
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
          <Icon name={iconTwo} size={24} color="#497a92" />
        </TouchableOpacity>
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
