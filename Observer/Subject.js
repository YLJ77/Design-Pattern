class Subject {
	register(observer) {
		throw new Error("This method must be overwitten!");
	}

	unregister(observer) {
		throw new Error("This method must be overwitten!");
	}
	
	notifyObserver() {
		throw new Error("This method must be overwitten!");
	}
}

module.exports = Subject;
