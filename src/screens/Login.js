import React, { Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { sendbirdLogin } from '../actions';
import { sha3_512 } from 'js-sha3';
import { FormLabel, FormInput, FormValidationMessage, Button } from '../components';

class Login extends Component {
	static navigationOptions = {
		title: 'LOGIN'
	}

	constructor(props) {
		super(props);
		this.state = {
			userId: '',
			nickname: '',
			password: ''
		}
	}
	
	componentWillReceiveProps(props) {
		const { user, error } = props;
		if (user) {
			const resetAction = NavigationActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'Menu'})
				]
			})
			this.setState({ userId: '', nickname: '' }, () => {
				this.props.navigation.dispatch(resetAction);
			})
		}
	}

	_userIdChanged = (userId) => {
		this.setState({userId});
	}

	_nicknameChanged = (nickname) => {
		this.setState({ nickname });
	}
	_passwordChanged = (password) => {
		this.setState({ password });
	}

	_onButtonPress = () =>{
		const {userId, nickname} = this.state;
		if(userId=='john'&&sha3_512(this.state.password)=='fe37dd66fa849ca98684160d542538b22c1edb576271d76b319ded4965d90143a0806fe1edf29b82b8740ec177880769629bdd1a0fb7cb97d7640e60c44833d3')
			this.props.sendbirdLogin({ userId, nickname });
		else
			this.props.error='Username and password do no match'
	}

	render() {
		return(
			<View style={{backgroundColor: '#fff', flex: 1}}>
				<View style={styles.containerStyle}>
					<FormLabel>User ID</FormLabel>
					<FormInput
						value = {this.state.userId}
						onChangeText={this._userIdChanged}
					/>
				</View>
				<View style={styles.containerStyle}>
					<FormLabel>Nickname</FormLabel>
					<FormInput
						value={this.state.nickname}
						onChangeText={this._nicknameChanged}
					/>
				</View>
				<View style={styles.containerStyle}>
					<FormLabel>Password</FormLabel>
					<FormInput
						value = {this.state.password}
						onChangeText={this._passwordChanged}
					/>
				</View>
				<View style={styles.containerStyle}>
					<Button
						buttonStyle={{backgroundColor: '#2096f3'}}
						title='Connect'
						onPress={this._onButtonPress}
					/>
				</View>
				<View style={styles.containerStyle}>
					<FormValidationMessage>{this.props.error.toString()}</FormValidationMessage>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	containerStyle:{
		marginTop: 10
	}
});

function mapStateToProps({ login }) {
	const { error, user } = login;
	return { error, user };
};

export default connect(mapStateToProps, { sendbirdLogin })(Login);
