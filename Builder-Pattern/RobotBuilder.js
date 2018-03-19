//Interface
class RobotBuilder {
    buildRobotHead() {
        throw new Error('This method must be overwritten!');
    }
    buildRobotTorso() {
        throw new Error('This method must be overwritten!');
    }
    buildRobotArms() {
        throw new Error('This method must be overwritten!');
    }
    buildRobotLegs() {
        throw new Error('This method must be overwritten!');
    }
    get robot() {
        throw new Error('This method must be overwritten!');
    }
}

module.exports = RobotBuilder;
