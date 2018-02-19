let EnemyShipFactory = require('./EnemyShipFactory');
let ESUFOBossGun = require('./ESUFOBossGun');
let ESUFOBossEngine = require('./ESUFOBossEngine');

class UFOBossEnemyShipFactory extends EnemyShipFactory {
    addESGun() {
        return new ESUFOBossGun();
    }
    
    addESEngine() {
        return new ESUFOBossEngine();
    }
}

module.exports = UFOBossEnemyShipFactory;
