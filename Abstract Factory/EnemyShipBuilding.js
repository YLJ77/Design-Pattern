//abstract class
class EnemyShipBuiding {
    //abstract method
    makeEnemyShip(typeOfShip) {
        throw new Error('This method must be overwritten!');
    }

    orderTheShip(typeOfShip) {
        let theEnemyShip = this.makeEnemyShip(typeOfShip);

        theEnemyShip.makeShip();
        theEnemyShip.displayEnemyShip();
        theEnemyShip.followHeroShip();
        theEnemyShip.enemyShipShoots();

        return theEnemyShip;
    }
    
}

module.exports = EnemyShipBuiding;
