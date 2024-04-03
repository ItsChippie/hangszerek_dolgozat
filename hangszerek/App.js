/*
* File: App.java
* Author: Vitovszki Tamás
* Copyright: 2024, Vitovszki Tamás
* Group: Szoft II
* Date: 2024-04-03
* Github: https://github.com/Tomasman05/Hangszerek
* Licenc: GNU GPL
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InstrumentsScreen from './InstrumentsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hangszerek" component={InstrumentsScreen} options={{ tabBarLabel: '', tabBarIcon: () => null }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
