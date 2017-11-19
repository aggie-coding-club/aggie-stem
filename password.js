import React, { Component } from 'react';
import { AppRegistry, Image, TextInput, View, Text,StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class password extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}
	
	_signInPressed(){
		Alert.alert('Sign in Pressed')
	}
	
	_guestPressed() {
		Alert.alert('Guest Button Pressed')
	}

	render() {
		return (
			<View style={{alignItems: 'center',paddingTop:50}}>
			//TODO get background image to work
			<Image source = {require('./background.jpg')} style = {styles.background}/>
				<Text style = {styles.title}>
					Aggie Stem
				</Text>
				//Get user's username
				<TextInput
					style={styles.pass}
					placeholder = "username"
					placeholderTextColor = {"white"}
					onChangeText = {(text) => this.setState({text})}
				/>
				<Text style={{padding: 10, fontSize:42, textAlign: 'center'}}>
					{this.state.text}
				</Text>
				//Get user's password
				<TextInput
					style={styles.user}
					placeholder = "password"
					placeholderTextColor = {"white"}
					onChangeText = {(text) => this.setState({text})}
				/>
				<Text style={{padding: 10, fontSize:42, textAlign: 'center'}}>
					{this.state.text}
				</Text>
				//When pressed should authenticate the user and then 
				//render then navigate to the actual application
				<TouchableOpacity onPress = {this._signInPressed}>
				  <View style={styles.button}>
				    <Text style={styles.buttonText}>Sign In</Text>
				  </View>
			    </TouchableOpacity >
				//When pressed take the user to the Aggie Stem Website
				//to be given information
			    <TouchableOpacity onPress = {this._guestPressed}>
			     <View style={styles.button}>
				  <Text style={styles.buttonText}>Guest</Text>
				 </View>
				</TouchableOpacity>
			</View>
	
		
		);
	}
}

const styles = StyleSheet.create( {
	background: {
		flex: 1,
		resizeMode: 'cover',
	},
	
	user: {
		color: 'white',
		width:100,
		height: 40,
		backgroundColor: '#500000',
		paddingTop: -50,
		textAlign: 'center',
	},

	pass: {
		paddingLeft: 0,
		width: 100,
		height: 40,
		margin: -10,
		color: 'white',
		backgroundColor: '#500000',
		textAlign: 'center',
	},
	signin: {
		paddingTop: 225,
		alignItems: 'center'
    //comment
	},
	guest: {
		paddingTop: 150,
		alignItems: 'center'
	},
	button: {
		marginBottom: 10,
		width: 75,
		borderRadius: 50,
		height: 25,
		alignItems: 'center',
		backgroundColor: '#500000'
	},
	buttonText: {
		padding: 5,
		fontSize: 10,
		color: 'white'
	},
	
	title: {
		paddingBottom: 10,
		fontSize: 25,
		marginBottom: 10,
		fontWeight: "bold",
		color: '#500000',
	}
});
