let Animal = require('./Animal');
let {ItFlys} = require('./Flys');

class Bird extends Animal {
	constructor() {
		super();

		this.sound = "Tweet";

		this.flyingType = new ItFlys();
	}
}

module.exports = Bird;
