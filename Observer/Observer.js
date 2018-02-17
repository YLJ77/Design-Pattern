class Observer {
	update(ibmPrice, aaplPrice, googPrice) {
		throw new Error("This method must be overwitten!");
	}
}

module.exports = Observer;
