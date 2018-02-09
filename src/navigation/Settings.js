"use strict";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';
import StaticBar from './StaticBar';

var {height, width}=Dimensions.get("window");

const SettingsPage = () => (
  <View style={styles.container}>
    <StaticBar/>
    <Text style={styles.words}>Settings Page</Text>
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

export default SettingsPage;
