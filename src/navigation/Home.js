"use strict";
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert,
  Dimensions
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';

import StaticBar from './StaticBar';
import TestScreen from './TestPage';
import LogoutButton from './LogoutButton';
var {height, width} = Dimensions.get('window');

const Home = () => (
  <View>
    <LogoutButton/>
    <StaticBar/>
  </View>
);
// Styles
const styles = StyleSheet.create({
  button: {
    position:'relative',
    height: 50,
    width: 50,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003C71',
  },
  words: {
    textAlign: 'center',
    fontSize: 13,
    color: '#FFFFFF'
  },
  container: {
    height: height,
    width: width,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
})

export default Home;
