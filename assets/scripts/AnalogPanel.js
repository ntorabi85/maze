
cc.Class({
    extends: cc.Component,

    properties: {
        gamepadVector: cc.v2(),
        analogPad: cc.Node,
        analogStick: cc.Node,
        gamepadMax: 100
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("touchstart", this.touchStart, this)
        this.node.on("touchmove", this.touchMove, this)
        this.node.on("touchend", this.touchEnd, this)
        this.node.on("touchcancel", this.touchCancel, this)
    },

    // start () {

    // },

    // update (dt) {},

    touchStart(event){
        let touchPos = event.getLocation();
        let localTouchPos = this.node.convertToNodeSpaceAR(touchPos);
        // this.analogPad.x = localTouchPos.x;
        // this.analogPad.y = localTouchPos.y;
        // this.limitGamepad(localTouchPos);
        this.setAnalogPadPos(localTouchPos);
        this.gamepadVector = localTouchPos;
    },
    
    touchMove(event){
        let touch = event.getTouches()[0];
        let touchPos = touch.getLocation();
        let localTouchPos = this.analogPad.convertToNodeSpaceAR(touchPos);
        // this.analogStick.x = localTouchPos.x;
        // this.analogStick.y = localTouchPos.y;
        this.limitGamepad(localTouchPos);
        this.setAnalogStickPos(localTouchPos);
        this.gamepadVector = localTouchPos;
        console.log("x: " + this.gamepadVector.x)
        console.log("y: " + this.gamepadVector.y)
    },

    touchEnd(){
        this.gamepadVector = cc.Vec2.ZERO
        this.setAnalogStickPos(cc.Vec2.ZERO)
        // this.analogStick.x = 0;
        // this.analogStick.y = 0;
    }, 
    
    touchCancel(){
        this.gamepadVector = cc.Vec2.ZERO
        this.setAnalogStickPos(cc.Vec2.ZERO)
        // this.analogStick.x = 0;
        // this.analogStick.y = 0;
    },

    setAnalogPadPos(pos){
        this.analogPad.setPosition(pos);
    },

    setAnalogStickPos(pos){
        this.analogStick.setPosition(pos);
    },

    limitGamepad(gamepadVector){
        let inputMag = gamepadVector.mag();
        if(inputMag > this.gamepadMax){
            gamepadVector.mulSelf(this.gamepadMax / inputMag);
        }
    }
});
