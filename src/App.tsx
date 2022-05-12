import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigations/AppNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
