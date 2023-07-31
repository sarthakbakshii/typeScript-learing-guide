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

/* abstract class is like a blueprint just like interface
 * you can not create object from it
 * its the responsibility of class extending it
 */

abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

    abstract getSepia() : void
    /* this will make it cupulsury to define in extemded class */

    getReelTime() : number{
        // some complex calculation
        return 8
    }
}  // just like interface 

class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number = 1
    ){
        super(cameraMode , filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const sb = new Instagram("test","test")

export {}