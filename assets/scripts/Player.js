
cc.Class({
    extends: cc.Component,

    properties: {
        touchInput: require("AnalogPanel"),
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () { },

    update (dt) {
        let pos = this.node.getPosition();
        pos.addSelf(this.touchInput.gamepadVector.mul(dt * 3));
        this.node.setPosition(pos);
    },
});
