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
import Buttons from './Buttons';
import LogoutScreen from './Logout';
import SpecialItems from './SpecialItems';
import ThingsToDo from './ThingsToDo';
import MessagingPortal from './MessagingPortal';
import PhotoGallery from './Gallery';
import SettingsPage from './Settings';
import CalendarList from '../calendar/calendar-list/CalendarList';
import Calendarload from '../calendar/Calendarload';

//Drawer Nagigator

const RootNavigator = DrawerNavigator({
  Home: {
    screen: Buttons,
    navigationOptions: {
      drawerLabel: 'Home',
      stackLabel: 'Home',
    },
  },
  CalendarList: {
    screen: CalendarList,
    navigationOptions: {
      drawerLabel: 'Calendar',
    },
  },
  Calendarload: {
    screen: Calendarload,
      navigationOptions: {
        drawerLabel: 'Calendar2',
    },
  },
  LogoutScreen: {
    screen: LogoutScreen,
    navigationOptions: {
      drawerLabel: 'Logout',
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
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
});

export default RootNavigator;
