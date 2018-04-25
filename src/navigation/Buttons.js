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
} from 'react-navigation';// Button that when pressed Alerts use to what they are doing
// Alert provides options on whether or not to logout or cancel
// Alert has a third option that describes what the button does
import StaticBar from './StaticBar';

//get dimentions
var {height, width} = Dimensions.get('window');

const Buttons = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.boxes}
      onPress={() => {
        //First alert
        Alert.alert(
        '',
        'Are you sure you want to log out?',
        [
          {text: 'HELP', onPress: () =>
          //if you press the button HELP you get sent to this alert
          //the HELP button will not appear again when you clear this secondary alert
            Alert.alert(
            '',
            'On pressing `Yes` you will be returned to the login screen.',
            [
              {text: 'Press to dismiss', onDismiss: () => {
                // this alert is just a rehash of the first alert, but without the HELP button
                // if I can figure out how to just go back to the first alert I would, but I haven't been able to do this
                Alert.alert(
                '',
                'Are you sure you want to logout?',
                [
                  {text: 'Cancel', onDismiss: () => {}},
                  {text: 'Yes', onPress: () => navigation.navigate('LogoutScreen')},
                ],
                )
              }},
            ],
            {cancelable: false}
          )},
          {text: 'Cancel', onDismiss: () => {}},
          // Needs the Logout Function inside of here to actually do something on pressing YES
          {text: 'Yes', onPress: () => navigation.navigate('LogoutScreen')}
        ],
        {cancelable: false }
      )}}>
      <Text style={styles.words}>Logout</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.boxes}
      onPress={() => navigation.navigate('Calendarload')
    }>
      <Text style={styles.words}>Calendar</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.boxes}
      onPress={() => navigation.navigate('ToDo')
    }>
      <Text style={styles.words}>College Station Activities</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.boxes}
      onPress={() => navigation.navigate('Medication')
    }>
      <Text style={styles.words}>Medication Portal</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.boxes}
      onPress={() => navigation.navigate('Message')
    }>
      <Text style={styles.words}>Messaging</Text>
    </TouchableHighlight>
  </View>
);
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  boxes: {
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003C71',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000000'
  },
  words: {
    textAlign: 'center',
    fontSize: 13,
    color: '#FFFFFF'
  },
})

export default Buttons;
