import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text,StyleSheet } from 'react-native';
export default class password extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View style={{alignItems: 'center',paddingTop:100}}>
				<TextInput
					style={styles.pass}
					placeholder = "password"
					placeholderTextColor = {"white"}
					onChangeText = {(text) => this.setState({text})}
				/>
				<Text style={{padding: 10, fontsize:42}}>
					{this.state.text}
				</Text>
				<TextInput
					style={styles.user}
					placeholder = "username"
					placeholderTextColor = {"white"}
					onChangeText = {(text) => this.setState({text})}
				/>
				<Text style={{padding: 10, fontsize:42}}>
					{this.state.text}
				</Text>
			</View>
	
		
		);
	}
}

const styles = StyleSheet.create( {
	user: {
		color: 'white',
		width:100,
		height: 40,
		backgroundColor: 'maroon',
		paddingTop: -50,	
	},

	pass: {
		paddingLeft: 0,
		width: 100,
		height: 40,
		color: 'white',
		backgroundColor: 'maroon',
	},
});
