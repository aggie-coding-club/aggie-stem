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

const LogoutButton = ({ navigation }) => (
  <View>
    <TouchableHighlight
      style={styles.button}
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
                  {text: 'Yes', onPress: () => navigation.navigate('Test')},
                ],
                )
              }},
            ],
            {cancelable: false}
          )},
          {text: 'Cancel', onDismiss: () => {}},
          // Needs the Logout Function inside of here to actually do something on pressing YES
          {text: 'Yes', onPress: () => navigation.navigate('Test')}
        ],
        {cancelable: false }
      )}}>
      <Text style={styles.words}>Logout</Text>
    </TouchableHighlight>
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
})

export default LogoutButton;
