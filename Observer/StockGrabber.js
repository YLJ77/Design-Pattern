let Subject = require('./Subject');

class StockGrabber extends Subject {
	constructor() {
		super();
		this._observers = [];
		this._ibmPrice = 0;
		this._aaplPrice = 0;
		this._googPrice = 0;
	}
	
	register(newObserver) {
		this._observers.push(newObserver);
	}

	unregister(deleteObserver) {
		let observerIndex = this._observers.findIndex((ele)=>{
			return ele.observerId === deleteObserver.observerId;
		});
		console.log("Observer " + (observerIndex + 1) + " deleted");
		this._observers.splice(observerIndex, 1);
	}

	notifyObserver() {
		for (let observer of this._observers) {
			observer.update(this._ibmPrice, this._aaplPrice, this._googPrice);
		}

	}

	setIBMPrice(newIBMPrice) {
		this._ibmPrice = newIBMPrice;
		this.notifyObserver();
	}

	setAAPLPrice(newAAPLPrice) {
		this._aaplPrice = newAAPLPrice;
		this.notifyObserver();
	}

	setGOOGPrice(newGOOGPrice) {
		this._googPrice = newGOOGPrice;
		this.notifyObserver();
	}
}

module.exports = StockGrabber;

