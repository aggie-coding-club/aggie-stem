"use strict";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';
import Hyperlink from 'react-native-hyperlink';
import StaticBar from './StaticBar';
import Buttons from './Buttons';

var {height, width}=Dimensions.get("window");

const ThingsToDo = ({ navigation }) => (
  <ScrollView>
    <StaticBar/>
    <View style={styles.container1}>

      <View style={styles.titleContainer}>
        <Text style={styles.titleWords}>Local Activies</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.wordsContainer}>
          <Text style={styles.titleWords}>Activity</Text>
          <Text style={styles.words}> </Text>
          <Text style={styles.words}>George Bush Library</Text>
          <Text style={styles.words}>Cinemark 18 / Premiere Cinemas</Text>
          <Text style={styles.words}>Bowling: Grand Station</Text>
          <Text style={styles.words}>Messina Hof</Text>
          <Text style={styles.words}>First Friday</Text>
          <Text style={styles.words}>Stark Galleries</Text>
          <Text style={styles.words}> </Text>
        </View>
        <View style={styles.wordsContainer}>
          <Text style={styles.titleWords}>Price</Text>
          <Text style={styles.words}> </Text>
          <Text style={styles.words}>$9.00</Text>
          <Text style={styles.words}>$4.75 - $12.00</Text>
          <Text style={styles.words}>       $25/hour, $3 shoes        </Text>
          <Text style={styles.words}>??</Text>
          <Text style={styles.words}>Free +</Text>
          <Text style={styles.words}>Free</Text>
          <Text style={styles.words}> </Text>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleWords}>Local Fast Food/Fast Casual</Text>
      </View>

      <View style={styles.wordsContainer}>
        <Text style={styles.words}> </Text>
        <Text style={styles.words}>Mad Taco</Text>
        <Text style={styles.words}>Torchys Taco</Text>
        <Text style={styles.words}>Fuego</Text>
        <Text style={styles.words}>Chick-Fil-A</Text>
        <Text style={styles.words}>Chipotle</Text>
        <Text style={styles.words}>FreeBirds</Text>
        <Text style={styles.words}>McAllisters</Text>
        <Text style={styles.words}>Blue Baker</Text>
        <Text style={styles.words}>Newks</Text>
        <Text style={styles.words}>Panera</Text>
        <Text style={styles.words}>Salata</Text>
        <Text style={styles.words}>Pei Wei</Text>
        <Text style={styles.words}>Pita Pit</Text>
        <Text style={styles.words}>Laynes</Text>
        <Text style={styles.words}>Canes</Text>
        <Text style={styles.words}>Chicken Oil Co.</Text>
        <Text style={styles.words}>Freddies</Text>
        <Text style={styles.words}> </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleWords}>Local Restaurants</Text>
      </View>

      <View style={styles.wordsContainer}>
      <Text style={styles.words}> </Text>
        <Text style={styles.words}>Dixie Chicken</Text>
        <Text style={styles.words}>Cheddars</Text>
        <Text style={styles.words}>Fish Daddys</Text>
        <Text style={styles.words}>Texas Roadhouse</Text>
        <Text style={styles.words}>Wings & More</Text>
        <Text style={styles.words}>Grub Burger Bar</Text>
        <Text style={styles.words}>Red Lobster</Text>
        <Text style={styles.words}>Razzoos Cajun Cafe</Text>
        <Text style={styles.words}>J. Codys BBQ</Text>
        <Text style={styles.words}>Paolos Italian Kitchen</Text>
        <Text style={styles.words}>Napa Flats</Text>
        <Text style={styles.words}>Buffalo Wild Wings</Text>
        <Text style={styles.words}>Aji Sushi</Text>
        <Text style={styles.words}> </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleWords}>Coffee Shops</Text>
      </View>

      <View style={styles.wordsContainer}>
      <Text style={styles.words}> </Text>
        <Text style={styles.words}>Sweet Eugenes House of Java</Text>
        <Text style={styles.words}>Minuti Coffee</Text>
        <Text style={styles.words}>Lupas Coffee</Text>
        <Text style={styles.words}>Starbucks</Text>
        <Text style={styles.words}> </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleWords}>Ice Cream</Text>
      </View>

      <View style={styles.wordsContainer}>
        <Text style={styles.words}> </Text>
        <Text style={styles.words}>Cold Stone Creameries</Text>
        <Text style={styles.words}>Marble Slab</Text>
        <Text style={styles.words}>Farmhouse Creameries</Text>
        <Text style={styles.words}>Spoons</Text>
        <Text style={styles.words}>Yogurtland</Text>
        <Text style={styles.words}> </Text>
      </View>
    </View>
  </ScrollView>
);

//Styles
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
  },
  container2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleContainer: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003C71',
    borderColor: '#000000',
  },
  wordsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#500000',
    borderColor: '#000000',
  },
  titleWords: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
  words: {
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
  }
})

export default ThingsToDo;
