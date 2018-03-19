let RobotBuilder = require('./RobotBuilder');
let Robot = require('./Robot');

class OldRobotBuilder extends RobotBuilder {
    constructor() {
        super();
        this._robot = new Robot();
    }
    buildRobotHead() {
        this._robot.robotHead = 'Tin Head';
    }
    buildRobotTorso()  {
        this._robot.robotTorso = 'Tin Torso';
    }
    buildRobotArms()  {
        this._robot.robotArms =  'Bolwtorch Arms';
    }
    buildRobotLegs()  {
        this._robot.robotLegs = 'Roller Skates';
    }
    get robot() {
        return this._robot;
    }

}

module.exports = OldRobotBuilder;
