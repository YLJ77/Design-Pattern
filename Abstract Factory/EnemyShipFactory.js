//interface
class EnemyShipFactory {
    addESGun() {
        throw new Error('This method must be overwritten!');
    }

    addESEngine() {
        throw new Error('This method must be overwritten!');
    }
}

module.exports = EnemyShipFactory;
