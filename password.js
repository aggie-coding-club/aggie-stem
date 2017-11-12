import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text,StyleSheet, TouchableOpacity } from 'react-native';

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
					placeholder = "username"
					placeholderTextColor = {"white"}
					onChangeText = {(text) => this.setState({text})}
				/>
				<Text style={{padding: 10, fontSize:42, textAlign: 'center'}}>
					{this.state.text}
				</Text>
				<TextInput
					style={styles.user}
					placeholder = "password"
					placeholderTextColor = {"white"}
					onChangeText = {(text) => this.setState({text})}
				/>
				<Text style={{padding: 10, fontSize:42, textAlign: 'center'}}>
					{this.state.text}
				</Text>
				//Create two buttons (Sign in and Guest)
				//No pressOn handlers yet, will need to add handlers to route sign in to main app 
				//After validating sign in info and guest button to website
				<TouchableOpacity>
				  <View style={styles.button}>
				    <Text style={styles.buttonText}>Sign In</Text>
				  </View>
			      </TouchableOpacity>
			      <TouchableOpacity>
			          <View style={styles.button}>
				    <Text style={styles.buttonText}>Guest</Text>
				  </View>
			      </TouchableOpacity>
			</View>
	
		
		);
	}
}

const styles = StyleSheet.create( {
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
		backgroundColor: 'maroon'
	},
	buttonText: {
		padding: 5,
		fontSize: 10,
		color: 'white'
	}
});
