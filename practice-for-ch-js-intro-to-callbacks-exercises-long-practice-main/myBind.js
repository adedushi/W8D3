class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}
 
const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);

// boundTurnOn();

Function.prototype.myBind = function(context){
    // console.log(this)
    const that = this;
    return function() {
        // console.log(this)
        // console.log(that);
        return that.call(context)
    }
}

// console.log(boundTurnOn);

const boundTurnOn = turnOn.myBind(lamp);
turnOn.myBind(lamp)
boundTurnOn();