interface TakePhoto {
    cameraMode : string
    filter : string
    burst : number
}

interface Story {
    createSTory() : void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
    ){}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
        public shorts : string
    ){}

    createSTory(): void {
        console.log("story is created")
    }
}