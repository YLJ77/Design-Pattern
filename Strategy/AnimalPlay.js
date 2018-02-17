let Dog = require('./Dog');
let Bird = require('./Bird');
let {ItFlys} = require('./Flys');

class AnimalPlay {
	constructor() {
		let sparky = new Dog();
		let tweety = new Bird(); 

		console.log("Dog: " + sparky.tryToFly());
		console.log("Bird: " + tweety.tryToFly());

		sparky.setFlyingAbility(new ItFlys());
		console.log("Dog: " + sparky.tryToFly());
	}
}

new AnimalPlay();
