import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useMemo, useRef} from 'react';
import Svg, {Line} from 'react-native-svg';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const WIDTH = width - 140;

const usePanGesture = () => {
  const transX = useRef(new Animated.Value(0)).current;

  const offsetX = useRef(new Animated.Value(0)).current;

  const onGestureHandle = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translation: x, State}) => Animated.set(transX, x),
      },
    ]);
  }, [transX, offsetX]);

  return {transX, onGestureHandle};
};

const PanComponent = () => {
  const {transX, onGestureHandle} = usePanGesture();
  return (
    <PanGestureHandler
      onGestureEvent={onGestureHandle}
      onHandlerStateChange={onGestureHandle}>
      <Animated.View
        style={{
          height: 20,
          width: 10,
          borderRadius: 1,
          backgroundColor: '#9fb6cb',
          position: 'absolute',
          elevation: 5,
          shadowColor: '#111',
          shadowRadius: 4,
          shadoOffset: {
            height: 2,
            width: 0,
          },
          shadowOpacity: 0.5,
          transform: [
            {
              translateX: transX,
            },
          ],
        }}></Animated.View>
    </PanGestureHandler>
  );
};

const PriceContent = props => {
  const {minValue, maxValue, onChangeMin, onChangeMax} = props;
  return (
    <View
      style={{
        marginVertical: 25,
        marginHorizontal: 30,
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#a1a1a1',
          height: 5,
          borderRadius: 5,
          width: WIDTH,
          position: 'absolute',
          alignSelf: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
          }}>
          <Svg height={5} width={WIDTH}>
            <Line
              stroke="#00c5c5"
              strokeWidth="12"
              x1={30}
              y1={0}
              x2={WIDTH}
              y2={0}
            />
          </Svg>
        </View>
      </View>
      <PanComponent />
    </View>
  );
};

export default PriceContent;

const styles = StyleSheet.create({});
