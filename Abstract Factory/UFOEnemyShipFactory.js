let EnemyShipFactory = require('./EnemyShipFactory');
let ESUFOGun = require('./ESUFOGun');
let ESUFOEngine = require('./ESUFOEngine');

class UFOEnemyShipFactory extends EnemyShipFactory {
    addESGun() {
        return new ESUFOGun();
    }
    
    addESEngine() {
        return new ESUFOEngine();
    }
}

module.exports = UFOEnemyShipFactory;
