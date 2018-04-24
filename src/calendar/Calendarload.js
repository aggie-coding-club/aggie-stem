import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Calendar,CalendarList,Agenda} from 'react-native-calendars';
export default class Calendarload extends Component {
 	 constructor(props) {
		      super(props);
		      this.state = {
				    items: {
                        '2017-07-09': [{
                                name: '4:15PM - 5:15PM\nCheck In',
                                height:100
                            },
                            {
                                name: '5:15PM - 5:45PM\nParent Orientation',
                                height:50
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:30PM - 9:30PM\nTeam Meeting / Media Rm @ Callaway',
                                height: 200,
                            }],
                        '2017-07-10': [{
                                name: '8:00AM - 8:30AM\nBreakfast @ Callaway',
                                height: 50,
                            },
                            {
                                name: '9:00AM - 10:30AM\nIntroductions/Campus Tour @ ILSB 1105',
                                height: 150,
                            },
                            {
                                name: '10:40AM - 12:10AM\n SAT PreTest @ ILSB 1105',
                                height: 150,
                            },
                            {
                                name: '12:20PM - 1:20PM\nLunch @ MSC',
                                height: 100,
                            },
                            {
                                name: '1:30PM - 3:00PM\nMicrocontrollers @ EDCT 503',
                                height: 150,
                            },
                            {
                                name: '3:10PM - 3:50PM\nPanel @ HECC 200',
                                height: 67,
                            },
                            {
                                name: '4:00PM - 5:30PM\nSmartCities @ EDCT 215',
                                height: 150,
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:30PM - 9:30PM\nGame Night in Media Room @ Callaway',
                                height: 200,
                            }],
                        '2017-07-11': [{
                                name: '8:00AM - 8:30AM\nBreakfast @ Callaway',
                                height: 50,
                            },
                            {
                                name: '9:00AM - 10:30AM\nSAT @ EDCT 225',
                                height: 150,
                            },
                            {
                                name: '10:40AM - 12:10AM\nPhysics Show MPHY - Hawking Auditorium',
                                height: 150,
                            },
                            {
                                name: '12:20PM - 1:20PM\nLunch @ MSC',
                                height: 100,
                            },
                            {
                                name: '1:30PM - 3:00PM\nMicrocontrollers @ EDCT 503',
                                height: 150,
                            },
                            {
                                name: '3:10PM - 3:50PM\nPanel @ HECC 200',
                                height: 67,
                            },
                            {
                                name: '4:00PM - 5:30PM\nSmartCities @ EDCT 215',
                                height: 150,
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:00PM - 8:30PM\nIn Room',
                                height: 150,
                            },
                            {
                                name: '9:00PM - 11:00PM\nAstronomy Show',
                                height: 200,
                            }],
                        '2017-07-12': [{
                                name: '8:00AM - 8:30AM\nBreakfast @ Callaway',
                                height: 50,
                            },
                            {
                                name: '9:00AM - 10:30AM\nSAT @ EDCT 225',
                                height: 150,
                            },
                            {
                                name: '10:40AM - 12:10AM\nStructures @ HECC 104',
                                height: 150,
                            },
                            {
                                name: '12:20PM - 1:20PM\nLunch @ MSC',
                                height: 100,
                            },
                            {
                                name: '1:30PM - 3:00PM\nMicrocontrollers @ EDCT 503',
                                height: 150,
                            },
                            {
                                name: '3:10PM - 3:50PM\nPanel @ HECC 200',
                                height: 67,
                            },
                            {
                                name: '4:00PM - 5:30PM\nSmartCities @ EDCT 215',
                                height: 150,
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:30PM - 9:30PM\nPool/Volleyball/Basketball @ Callaway',
                                height: 200,
                            }],
                        '2017-07-13': [{
                                name: '8:00AM - 8:30AM\nBreakfast @ Callaway',
                                height: 50,
                            },
                            {
                                name: '9:00AM - 10:30AM\nSAT @ EDCT 225',
                                height: 150,
                            },
                            {
                                name: '10:40AM - 12:10AM\nStructures @ HECC 104',
                                height: 150,
                            },
                            {
                                name: '12:20PM - 1:20PM\nLunch @ MSC',
                                height: 100,
                            },
                            {
                                name: '1:30PM - 3:00PM\nMicrocontrollers @ EDCT 503',
                                height: 150,
                            },
                            {
                                name: '3:10PM - 3:50PM\nPanel @ HECC 200',
                                height: 67,
                            },
                            {
                                name: '4:00PM - 5:30PM\nSmartCities @ EDCT 215',
                                height: 150,
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:30PM - 9:30PM\nPool/Volleyball/Basketball @ Callaway',
                                height: 200,
                            }],
                        '2017-07-14': [{
                                name: '8:00AM - 8:30AM\nBreakfast @ Callaway',
                                height: 50,
                            },
                            {
                                name: '9:00AM - 10:30AM\nSAT @ EDCT 225',
                                height: 150,
                            },
                            {
                                name: '10:40AM - 12:10AM\nStructures @ HECC 104',
                                height: 150,
                            },
                            {
                                name: '12:20PM - 1:20PM\nLunch @ SBISA',
                                height: 100,
                            },
                            {
                                name: '1:30PM - 3:00PM\nMicrocontrollers @ EDCT 503',
                                height: 150,
                            },
                            {
                                name: '3:10PM - 3:50PM\nPanel @ HECC 200',
                                height: 67,
                            },
                            {
                                name: '4:00PM - 5:30PM\nSmartCities @ EDCT 215',
                                height: 150,
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:30PM - 9:30PM\nGrand Station',
                                height: 200,
                            }],
                        '2017-07-15': [{
                                name: '9:30AM - 10:30AM\nSleep In\nBreakfast @ Callaway',
                                height: 100,
                            },
                            {
                                name: '11:00AM - 12:30PM\n????',
                                height: 150,
                            },
                            {
                                name: '1:00PM - 2:00PM\nCiCi\'s',
                                height: 100,
                            },
                            {
                                name: '2:30PM - 3:00PM\nChange for Jumping World',
                                height: 50,
                            },
                            {
                                name: '3:30PM - 5:30PM\nJumping World',
                                height: 200,
                            },
                            {
                                name: '6:00PM - 7:00PM\nDinner @ Callaway',
                                height: 100,
                            },
                            {
                                name: '7:30PM - 9:30PM\nMovie Night in Media Room @ Callaway',
                                height: 200,
                            }]
                        }
		    }
     };
	render() {
		return (
			<Agenda
				// the list of items that have to be displayed in agenda. If you want to render item as empty date
			        // the value of date key kas to be an empty array []. If there exists no value for date key it is
			    	// considered that the date in question is not yet loaded
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                markingType={'interactive'}
                markedDates={{
                  '2017-02-08': [{textColor: '#666'}],
                //  '2017-05-09': [{textColor: '#666'}],
                //  '2017-05-14': [{startingDay: true, color: 'blue'}, {endingDay: true, color: 'blue'}],
                //  '2017-05-21': [{startingDay: true, color: 'blue'}],
                //  '2017-05-22': [{endingDay: true, color: 'gray'}],
                //  '2017-05-24': [{startingDay: true, color: 'gray'}],
                //  '2017-05-25': [{color: 'gray'}],
                  '2017-02-09': [{endingDay: true, color: 'gray'}]}}
                // monthFormat={'yyyy'}
                // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}

			        // agenda theme
				theme={{
					calendarBackground: '#500000',
					agendaDayTextColor: '#707373',
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
					agendaDayNumColor: '#707373',
				}}
				/>
		);
	}
   loadItems(day) {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            var tim = new Date();
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            //console.log(strTime);

            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
            }
            /*
              const numItems = Math.floor(Math.random() * 5);
              for (let j = 0; j < numItems; j++) {
                this.state.items[strTime].push({
                  name: 'Item for ' + strTime,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
            */
            }
        //console.log(this.state.items);
        const newItems = {};
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
        this.setState({
            items: newItems
        });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text></Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
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
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});
