class Event {
	constructor(name,description,date) {
		this.name=name;
		this.description=description;
		this.date=date;
	}
	getName() {
		return this.name;
	}
	getDescription() {
		return this.description;
	}
	getDate() {
		return this.date;
	}
	setName(newName) {
		this.name=newName;
	}
	setDescription(newDescription) {
		this.description= newDescription;
	}
	setDate(newDate) {
		this.date=newDate;
	}
	toString() {
		return "Name: " + this.name + "\nDescription: " + this.description + "\nDate: "+this.date;
	}
}
d = new Date(2017,10,9,7,30);
var pool = new Event('Aggie-Stem Meeting','Meeting at Harrington tower',d);
console.log(pool.toString());
