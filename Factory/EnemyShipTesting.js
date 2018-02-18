let  UFOEnemyShip = require('./UFOEnemyShip');
let RocketEnemyShip = require('./RocketEnemyShip');
let EnemyShipFactory = require('./EnemyShipFactory');

class EnemyShipTesting {
    constructor() {
        this.scanner();
    }

    doStuffEnemy(anEnemyShip) {
        anEnemyShip.displayEnemyShip();
        anEnemyShip.followHeroShip();
        anEnemyShip.enemyShipShoots();
    }

    scanner() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        let theEnemy;
        let shipFactory = new EnemyShipFactory(); //+

        rl.question('What type of ship? (U / R / B)', (enemyShipOption) => {
            //bad code
            /*
            if (enemyShipOption === 'U') {
                theEnemy = new UFOEnemyShip()
            } else {
                if (enemyShipOption === 'R') {
                    theEnemy = new RocketEnemyShip();
                }
            }
            */
            theEnemy = shipFactory.makeEnemyShip(enemyShipOption);
            
            if (theEnemy !== null) {
                this.doStuffEnemy(theEnemy);
                rl.close();
            } else {
                rl.close();
                this.scanner();
            }

        }); 
    }
}

new EnemyShipTesting();
