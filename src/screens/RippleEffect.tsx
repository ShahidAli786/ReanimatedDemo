import {View, StyleSheet, Platform, Dimensions, Text} from 'react-native';
import React from 'react';
import Ripple from '../components/Ripple';

const {width, height} = Dimensions.get('window');

export default function RippleEffect() {
  return (
    <View style={styles.container}>
      <Ripple
        onTap={() => {
          console.log('on tap');
        }}
        style={styles.ripple}>
        <Text style={{fontSize: 25}}>Tap</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
