import React, { Component,View,Text } from 'react';
import { Calendar,CalendarList,Agenda} from 'react-native-calendars';
export default class Calendarload extends Component {

	render() {
		return (
			<Calendar
			theme={{
				backgroundColor: '#500000',
				calendarBackground: '#500000',
				dayTextColor: '#ffffff',
				monthTextColor: '#ffffff',
				arrowColor:'#707373',
				todayTextColor: '#707373',
				textDisabledColor: '#332c2c',

			}}
				 />,
			<Agenda
				theme={{
					calendarBackground: '#500000',
					agendaDayTextColor: '#ffffff',
					dayTextColor:'#ffffff',
					monthTextColor: '#ffffff',
					arrowColor: '#707373',
					todayTextColor: '#707373',
					textDisabledColor: '#332c2c',
					agendaKnobColor: '#ffffff',
					agendaTodayColor: '#332c2c',
					agendaDayNumColor: '#332c2c',
					dotColor: '#332c2c',
					selectedDotColor: '#ffffff',
					agendaDayNumColor: '#ffffff',
				}}
				/>
		);
	}
}
/*
 
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
*/
