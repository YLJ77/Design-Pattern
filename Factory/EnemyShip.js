class EnemyShip {
    constrcutor() {
        this._name = '';
        this._amtDamage = 0;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get damage() {
        return this._amtDamage;
    }

    set damage(value) {
        this._amtDamage = value;
    }

    followHeroShip() {
        console.log(this.name + ' is following the hero');
    }

    displayEnemyShip() {
        console.log(this.name + ' is on the screen');
    }

    enemyShipShoots() {
        console.log(this.name + ' attacks and does ' + this.damage + ' damage');
    }
}

module.exports = EnemyShip;














