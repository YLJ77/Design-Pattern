let OldRobotBuilder = require('./OldRobotBuilder');
let RobotEngineer = require('./RobotEngineer');

class TestRobotBuilder {
    constructor() {
        let oldStyleRobot = new OldRobotBuilder();
        let robotEngineer = new RobotEngineer(oldStyleRobot);

        robotEngineer.makeRobot();
        let firstRobot = robotEngineer.robot;

        console.log('Robot Build');
        console.log('Robot Head Type: ' + firstRobot.robotHead);
        console.log('Robot Torso Type: ' + firstRobot.robotTorso);
        console.log('Robot Arm Type: ' + firstRobot.robotArms);
        console.log('Robot Leg Type: ' + firstRobot.robotLegs);
    }
}

new TestRobotBuilder();
