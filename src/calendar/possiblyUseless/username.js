import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';
export default class username extends Component {
	constructor(props) {
		super(props);
		this.state = {text: 'username'};
	}

	render() {
		return (
			<View style = {{paddingTop: 90,paddingLeft: 100}}>
				<TextInput
					style={{width: 100,height: 40,color: 'white',backgroundColor: 'maroon'}}
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

