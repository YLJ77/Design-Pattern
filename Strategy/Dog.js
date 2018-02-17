let Animal = require('./Animal');
let {CantFly} = require('./Flys');

class Dog extends Animal {
	constructor() {
		super();
		this.sound = 'Bark';
		
		this.flyingType = new CantFly();
	}

	digHole() {
		console.log('Dug a hole');
	}
}

module.exports = Dog;
