"use strict";
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';

import StaticBar from './StaticBar';

var {height, width}=Dimensions.get("window");

const LogoutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.words}>LOGGED OUT</Text>
    <StaticBar/>
  </View>
);

//Styles
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  words: {
    textAlign: 'center',
    fontSize: 13,
    color: '#FFFFFF'
  }
})

export default LogoutScreen;
