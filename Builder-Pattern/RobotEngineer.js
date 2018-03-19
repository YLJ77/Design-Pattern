let RobotBuilder = require('./RobotBuilder');

class RobotEngineer {
    constructor(robotBuilder) {
        this._robotBuilder = robotBuilder;
    }

    get robot() {
        return this._robotBuilder.robot;
    }

    makeRobot() {
        this._robotBuilder.buildRobotHead();
        this._robotBuilder.buildRobotTorso();
        this._robotBuilder.buildRobotArms();
        this._robotBuilder.buildRobotLegs();
    }
}

module.exports = RobotEngineer;
