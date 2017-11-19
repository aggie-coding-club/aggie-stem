import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text,StyleSheet } from 'react-native';
export default class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
		];
		p = new Date();
		return (
			<View>
				<Text style={styles.title}>
					{monthNames[p.getMonth()]}
				</Text>
				<View style={styles.box} />
				<View style={styles.maroon} />
			</View>
	
		
		);
	}
}

const styles = StyleSheet.create( {
	title: {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 0,	
	},
	box: {
		width: 50,
		height: 50,
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 2,
		backgroundColor: '#500000',
	},
	maroon: {
		width: 50,
		height: 50,
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 2,
		backgroundColor: 'maroon',
	},
});
