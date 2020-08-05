cc.Class({
    extends: cc.Component,

    properties: {
        touchInput: require("AnalogPanel"),
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // window.addEventListener("resize", ()=>{
        //     console.log("resize happend");
        // });
        cc.director.getPhysicsManager().enabled = true;
        this.node.on("touchstart", ()=>{
            let rigidbody = this.node.getComponent(cc.RigidBody);
            // rigidbody.linearVelocity = new cc.v2(10, 10);
            rigidbody.applyForceToCenter( new cc.v2(200, 0))
        })
    },
    
    // start () { },
    
    update (dt) {
        // let pos = this.node.getPosition();
        // pos.addSelf(this.touchInput.gamepadVector.mul(dt * 3));
        // this.rigidbody.applyForceToCenter(this.touchInput.gamepadVector.mul(dt * 10))
        let rigidbody = this.node.getComponent(cc.RigidBody);
        rigidbody.applyForceToCenter( this.touchInput.gamepadVector.mul(dt * 26))
        // this.node.setPosition(pos);
    },
});
