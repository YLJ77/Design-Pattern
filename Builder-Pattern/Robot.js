let RobotPlan = require('./RobotPlan');

class Robot extends RobotPlan {
    constructor() {
        super();
        this._robotHead = null;
        this._robotTorso = null;
        this._robotArms = null;
        this._robotLegs = null;
    }
    set robotHead(head) {
        this._robotHead = head;
    }
    get robotHead() {
        return this._robotHead;
    }
    set robotTorso(torso) {
        this._robotTorso = torso;
    }
    get robotTorso() {
        return this._robotTorso;
    }
    set robotArms(arms) {
        this._robotArms = arms;
    }
    get robotArms() {
        return this._robotArms;
    }
    set robotLegs(legs) {
        this._robotLegs = legs;
    }
    get robotLegs() {
        return this._robotLegs;
    }
}

module.exports = Robot;
