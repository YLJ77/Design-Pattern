let EnemyShip = require('./EnemyShip');

class UFOEnemyShip extends EnemyShip {
    constructor() {
        super();
        this.name = 'UFO Enemy Ship';
        this.damage = 20.0;
    }
}

module.exports = UFOEnemyShip;
