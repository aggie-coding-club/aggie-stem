"use strict";
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert,
  Dimensions,
 } from 'react-native';
 import {
   StackNavigator,
   TabNavigator,
   DrawerNavigator
 } from 'react-navigation';
import Home from './Home';
import LogoutButton from './LogoutButton';
import TestScreen from './TestPage';
import SpecialItems from './SpecialItems';
import ThingsToDo from './ThingsToDo';
import MessagingPortal from './MessagingPortal';
import PhotoGallery from './Gallery';
import SettingsPage from './Settings';

//Drawer Nagigator

const RootNavigator = DrawerNavigator({
  Home: {
    screen: LogoutButton,
    navigationOptions: {
      drawerLabel: 'Home',
      stackLabel: 'Home',
    },
  },
  Test: {
    screen: TestScreen,
    navigationOptions: {
      drawerLabel: 'Test',
    },
  },
  Medication: {
    screen: SpecialItems,
    navigationOptions: {
      drawerLabel: 'Medication/ Dietary Restrictions',
    },
  },
  ToDo: {
    screen: ThingsToDo,
    navigationOptions: {
      drawerLabel: 'Things to do',
    },
  },
  Message: {
    screen: MessagingPortal,
    navigationOptions: {
      drawerLabel: 'Messaging Portal',
    },
  },
  Photos: {
    screen: PhotoGallery,
    navigationOptions: {
      drawerLabel: 'Photo Gallery'
    },
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
});

export default RootNavigator;
