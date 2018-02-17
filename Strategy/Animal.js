let {Flys} = require('./Flys');

class Animal {
	constructor() {
		this._name = '';
		this._height = 0;
		this._weight = 0;
		this._sound = 'sound';
		
		this.flyingType = new Flys();
	}

	set name(value) {
		this._name = value;
	}

	get name() {
		return this._name;
	}

	set height(value) {
		this._height = value;
	}

	get height() {
		return this._height; 
	}

	set weight(value){
		if (value < 0) {
			throw new Error('Weight must be bigger than 0');
		}
		this._weight = value;
	}

	get weight() {
		return this._weight;
	}

	set sound(value) {
		this._sound = value;
	}

	get sound() {
		return this._sound;
	}

	tryToFly() {
		return this.flyingType.fly();
	}

	setFlyingAbility(newFlyType) {
		this.flyingType = newFlyType;
	}
}
module.exports = Animal;
