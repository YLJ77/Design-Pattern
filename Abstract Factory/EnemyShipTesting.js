let UFOEnemyShipBuilding = require('./UFOEnemyShipBuilding.js');

class EnemyShipTesting {
    constructor() {
        let makeUFOs = new UFOEnemyShipBuilding();
        
        let theGrunt = makeUFOs.orderTheShip('UFO');
        console.log(theGrunt + '\n');

        let theBoss = makeUFOs.orderTheShip('UFO BOSS');
        console.log(theBoss + '\n');
    }
}

new EnemyShipTesting();
