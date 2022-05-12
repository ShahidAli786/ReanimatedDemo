import React, {useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};
function Basics() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}],
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.View style={[styles.animatedView, reanimatedStyle]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Basics;
