let StockGrabber = require('./StockGrabber');
let StockObserver = require('./StockObserver');

class GrabStocks {
	constructor() {
		let stockGrabber = new StockGrabber();
		let observer1 = new StockObserver(stockGrabber);

		stockGrabber.setIBMPrice(192.03);
		stockGrabber.setAAPLPrice(223.32);
		stockGrabber.setGOOGPrice(302.87);

		let observer2 = new StockObserver(stockGrabber);

		stockGrabber.setIBMPrice(192.03);
		stockGrabber.setAAPLPrice(223.32);
		stockGrabber.setGOOGPrice(302.87);

		stockGrabber.unregister(observer1);

		stockGrabber.setIBMPrice(192.03);
		stockGrabber.setAAPLPrice(223.32);
		stockGrabber.setGOOGPrice(302.87);
	}
}

new GrabStocks();
