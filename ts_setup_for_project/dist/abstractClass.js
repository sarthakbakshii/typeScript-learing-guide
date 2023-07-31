"use strict";
/*
// possible :

class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}
}

const sb = new TakePhoto("test","test")

//  Not possible

abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}
}

const sb = new TakePhoto("test","test")

// ts error : Cannot create an instance of an abstract class.ts(2511)

*/
Object.defineProperty(exports, "__esModule", { value: true });
/* abstract class is like a blueprint just like interface
 * you can not create object from it
 * its the responsibility of class extending it
 */
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    /* this will make it cupulsury to define in extemded class */
    getReelTime() {
        // some complex calculation
        return 8;
    }
} // just like interface 
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst = 1) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const sb = new Instagram("test", "test");
