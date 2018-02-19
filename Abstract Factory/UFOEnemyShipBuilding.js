let EnemyShipBuilding = require('./EnemyShipBuilding');
let UFOEnemyShipFactory = require('./UFOEnemyShipFactory');
let UFOBossEnemyShipFactory = require('./UFOBossEnemyShipFactory');
let UFOEnemyShip = require('./UFOEnemyShip');
let UFOBossEnemyShip = require('./UFOBossEnemyShip');

class UFOEnemyShipBuilding extends EnemyShipBuilding {
    makeEnemyShip(typeOfShip) {
        let theEnemyShip;
        let shipPartsFactory;
        switch (typeOfShip) {
            case 'UFO':
                shipPartsFactory = new UFOEnemyShipFactory();
                theEnemyShip = new UFOEnemyShip(shipPartsFactory);
                theEnemyShip.name = 'UFO Grunt Ship';
                break;
            case 'UFO BOSS':
                shipPartsFactory = new UFOBossEnemyShipFactory();
                theEnemyShip = new UFOBossEnemyShip(shipPartsFactory);
                theEnemyShip.name = 'UFO Boss Ship';
        }
        return theEnemyShip;
    }
}

module.exports = UFOEnemyShipBuilding;
