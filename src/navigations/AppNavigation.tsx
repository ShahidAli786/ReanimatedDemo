import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Basics from '../screens/Basics';
import GestureHandlerExample from '../screens/GestureHandlerExample';
import AnimatedSwiper from '../screens/AnimatedSwiper';
import ThemeChangeExample from '../screens/ThemeChangeExample';
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Basics">
      <Drawer.Screen name="Basics" component={Basics} />
      <Drawer.Screen name="Gesture Handler" component={GestureHandlerExample} />
      <Drawer.Screen name="Animated Swiper" component={AnimatedSwiper} />
      <Drawer.Screen name="Theme Change" component={ThemeChangeExample} />
    </Drawer.Navigator>
  );
}
