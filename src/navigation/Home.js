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
  Dimensions,
  Image
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';

import StaticBar from './StaticBar';
import LogoutScreen from './Logout';
import Buttons from './Buttons';
var {height, width} = Dimensions.get('window');

const Home = () => (
  <View>
    <StaticBar/>
    <Buttons/>
    <Image
      style={{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        height: '400px',
      }}
      source={require('./stem.jpg')}
    >
    </Image>
  </View>
);

export default Home;
