import username from './username';
import password from './password';
import { AppRegistry } from 'react-native';

export default class login {
	AppRegistry.registerComponent('StemProject', () => username);
	AppRegistry.registerComponent('StemProject', () => password);
}

