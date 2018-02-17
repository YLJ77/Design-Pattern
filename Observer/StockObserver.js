let Observer = require('./Observer');

class StockObserver extends Observer {
	constructor(stockGrabber) {
		super();
		this._ibmPrice = 0;
		this._aaplPrice = 0;
		this._googPrice = 0;
		
		this.stockGrabber = stockGrabber;
		
		StockObserver.observerIdTracker = StockObserver.observerIdTracker || 0;
		StockObserver.observerIdTracker += 1;
		this._observerId = StockObserver.observerIdTracker;
		console.log("New Observer " + StockObserver.observerIdTracker);
		this.stockGrabber.register(this);

		
	}	

	update(ibmPrice, aaplPrice, googPrice) {
		this._ibmPrice = ibmPrice;	
		this._aaplPrice = aaplPrice;	
		this._googPrice = googPrice;	

		console.log(this._observerId);
		console.log(`${this._ibmPrice} | ${this._aaplPrice} | ${this._googPrice}`);
	}

	get observerId() {
		return this._observerId;
	}
}

module.exports = StockObserver;
