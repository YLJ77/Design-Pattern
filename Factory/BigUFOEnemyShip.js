let UFOEnemyShip = require('./UFOEnemyShip');

class BigUFOEnemyShip extends UFOEnemyShip {
    constructor() {
        super();
        this.name = 'Big UFO Enemy Ship';
        this.damage = 40.0;
    }
}

module.exports = BigUFOEnemyShip;
