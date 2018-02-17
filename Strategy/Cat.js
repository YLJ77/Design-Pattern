let Animal = require('./Animal');

class Cat extends Animal {
	constructor() {
		super();
		super.setSound('Meow');
	}
}

module.exports = Cat;
