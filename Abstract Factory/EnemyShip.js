let ESWeapon = require('./ESWeapon');
let ESEngine = require('./ESEngine');
//abstract class
class EnemyShip {
    constructor() {
        this._name = '';
        this.weapon = new ESWeapon();
        this.engine = new ESEngine();
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    //abstract method
    makeShip() {
        throw new Error('This method must be overwritten!');
    }

    followHeroShip() {
        console.log(this.name + ' is following the hero at ' + this.engine);
    }

    displayEnemyShip() {
        console.log(this.name + ' is on the screen');
    }

    enemyShipShoots() {
        console.log(this.name + ' attacts and does ' + this.weapon);
    }

    toString() {
        return `The ${this.name} has a top speed of ${this.engine} and an attack power of ${this.weapon}`
    }
}

module.exports = EnemyShip;
