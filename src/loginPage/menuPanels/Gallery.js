import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Gallery extends Component {
  render() {
    return (
      <View style={{alignItems: 'center',paddingTop:50}}>
        <Text style={styles.menu}>
          Gallery
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
	menu: {
		paddingBottom: 10,
		fontSize: 25,
		marginBottom: 10,
		fontWeight: "bold",
		color: '#500000',
	},
)};