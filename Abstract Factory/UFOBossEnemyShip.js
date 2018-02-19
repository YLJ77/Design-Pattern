let EnemyShip = require('./EnemyShip');

class UFOBossEnemyShip extends EnemyShip {
    constructor(shipFactory) {
        super();
        this.shipFactory = shipFactory;
    }

    makeShip() {
        console.log(`Making enemy ship ${this.name}`);
        this.weapon = this.shipFactory.addESGun();
        this.engine = this.shipFactory.addESEngine();
    }
}

module.exports = UFOBossEnemyShip;
