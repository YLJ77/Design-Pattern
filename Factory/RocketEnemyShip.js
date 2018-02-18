let EnemyShip = require('./EnemyShip');

class RocketEnemyShip extends EnemyShip {
    constructor() {
        super();
        this.name = 'Rocket Enemy Ship';
        this.damage = 10.0;
    }
}

module.exports = RocketEnemyShip;
