import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

const DEFAULT_VALUE = 0.3;

const SliderContainer = (props: {
  children: React.ReactElement,
  sliderValue?: Array<number>,
  trackMarks?: Array<number>,
  vertical?: boolean,
}) => {
  const {sliderValue, trackMarks} = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE,
  );
  let renderTrackMarkComponent: React.ReactNode;

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={{}}>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        {renderChildren()}
      </View>

      <View
        style={{
          marginHorizontal: 30,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            height: 35,
            width: 90,
            backgroundColor: '#d0d0d0',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#909090',
              fontSize: 15,
            }}>
            $ {value.slice(0, value.length - 1)}
          </Text>
        </View>
        <View
          style={{
            height: 35,
            width: 90,
            backgroundColor: '#d0d0d0',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#909090',
              fontSize: 15,
            }}>
            $ {value.slice(value.length - 1)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const PriceContent = () => (
  <SliderContainer sliderValue={[6, 18]}>
    <Slider
      animateTransitions
      maximumTrackTintColor="#d3d3d3"
      maximumValue={150}
      minimumTrackTintColor="#1fb28a"
      minimumValue={0}
      step={0.5}
      thumbTintColor="#1a9274"
    />
  </SliderContainer>
);

export default PriceContent;
