console.log("typescript is here") 

// for clear instruction watch readme.md

console.log("checking command tsc -w")

// ====================== EXAMPLE of CLASS 

class User {

    email : string
    name : string                                      /*  *******************************************************************  */
    city : string = ""                                 /*   not using in constructor, so we need an initializer , i.e = ""      */
    phoneNum : number = 0                              /*   public , if not mentioned anything by default                       */
    readonly _id : number = 213                        /*   read only cant be modified                                          */
    private atmDetail : number = 234424532334          /*   cant use outside the class, not even extended class                 */
    #atmCVV : number = 231                             /*   same as private , just another syntax                               */
    protected count : number = 1                       /*   can be use in class, and extended class, not outside                */
                                                       /*  *******************************************************************  */
    constructor(email : string , name : string ){
        this.email = email;
        this.name = name;
        /*
         * you can not do :=> 
         * 
         * this.email : string = email;
         * this.name : string = name;
         * 
         * you have to define it on top of constructor 
         */
    }
}

const sarthakUser = new User("s@b.com" ,"sarthak");

sarthakUser.city = "kanpur";
sarthakUser.phoneNum = 9076782112

// sarthakUser._id = 909
/*  read only : can not edit */

// sarthakUser.atmDetail     
/*   prvate : can not use outside */



// ==================== PROFFESIONAL WAY OF WRITING

class User2 {

    constructor( 
        public email : string , 
        public name : string,
        readonly _id : number = 213,
        private _courseCount : number = 1,
        protected _courseCountPublic : number = 1

        ){
                this.email = email;
                this.name = name;
    }


    //========== getter  and setter example

    get getAppleEmail() : string{
        return `apple${this.email}`
    }

    /* private variable cant be use outside the class
     * but how make getter and setter 
     * so that user can access private variable outside class also, but not derectly
     * but via getter and setters
     */

    get courseCount() : number {
        return this._courseCount
    }
    
    // IMPORTANT : in setter , you cant make a setter return type
    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("course count should me 1")
        }
        this._courseCount = courseNum
    }


    // ================= private method example 

    private deleteToken(){
        console.log("token deleted");
    }
}

const sarthakUser2 = new User2("s@b.com" ,"sarthak");

class SubUser extends User2{
    isFamily : boolean = true;
    changeCourseCount(){
        // this._courseCount = 1 
        /* its access modifier was private, cant be use in exted class */

        this._courseCountPublic = 4   
        /* its access modifier was protected, can be use in exted class */
    }
}
