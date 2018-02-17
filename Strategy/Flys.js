class Flys {
	fly() {
		throw new Error("This method must be overwitten!");
	}
}

class ItFlys extends Flys {
	fly() {
		return "Flying High";
	}
}

class CantFly extends Flys {
	fly() {
		return "I can't fly";
	}
}

module.exports = {
	Flys,
	ItFlys,
	CantFly
};
