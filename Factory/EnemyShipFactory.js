let UFOEnemyShip = require('./UFOEnemyShip');
let RocketEnemyShip = require('./RocketEnemyShip');
let BigUFOEnemyShip = require('./BigUFOEnemyShip');

class EnemyShipFactory {
    constructor() {}

    makeEnemyShip(shipType) {
        let ship;

        switch(shipType) {
            case 'U':
                return new UFOEnemyShip();
            case 'R':
                return new RocketEnemyShip();
            case 'B':
                return new BigUFOEnemyShip();
            default:
                return null;
        }
    }
}

module.exports = EnemyShipFactory;
