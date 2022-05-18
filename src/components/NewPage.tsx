/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

interface NewPageProps {
  index: number;
  title: string;
  translateX: Animated.SharedValue<number>;
}

const {width: PAGE_WIDTH} = Dimensions.get('window');

const NewPage: React.FC<NewPageProps> = ({index, title, translateX}) => {
  const PageOffset = PAGE_WIDTH * index;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value + PageOffset,
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
          justifyContent: 'center',
          alignItems: 'center',
        },
        rStyle,
      ]}>
      <Text
        style={{
          fontSize: 70,
          fontWeight: '700',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
        }}>
        {title}
      </Text>
    </Animated.View>
  );
};
export {PAGE_WIDTH};
export default NewPage;
