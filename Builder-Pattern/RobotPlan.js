//Interface
class RobotPlan {
    set robotHead(head) {
        throw new Error('This method must be overwritten!');
    }
    set robotTorso(torso) {
        throw new Error('This method must be overwritten!');
    }
    set robotArms(arms) {
        throw new Error('This method must be overwritten!');
    }
    set robotLegs(legs) {
        throw new Error('This method must be overwritten!');
    }
}

module.exports = RobotPlan;
