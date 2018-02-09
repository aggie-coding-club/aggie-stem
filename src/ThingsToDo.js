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

const ThingsToDo = () => (
  <View style={styles.container}>
    <StaticBar/>
    <Text style={styles.words}>Things to do PAGE</Text>
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

export default ThingsToDo;
