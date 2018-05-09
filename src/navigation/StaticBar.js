import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

//is the bar at the top of the screen Andcontaining signal, time, and other icons
// native to both iOS and Android
const StaticBar = () => {
  return(
    <StatusBar
      backgroundColor = '#500000'
      BarStyle = 'default'
      hidden = {false}
      />
  );
}

export default StaticBar;
