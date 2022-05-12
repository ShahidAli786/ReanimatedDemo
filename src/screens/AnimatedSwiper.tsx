import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../components/Page';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];

export default function AnimatedSwiper() {
  const translateX = useSharedValue(0);
  const scrollHnadler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        pagingEnabled
        onScroll={scrollHnadler}
        scrollEventThrottle={16}
        horizontal
        style={styles.container}>
        {WORDS.map((word, index) => (
          <Page
            key={index.toString()}
            title={word}
            index={index}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
