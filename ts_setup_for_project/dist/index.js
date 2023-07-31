"use strict";
var _User_atmCVV;
console.log("typescript is here");
// for clear instruction watch readme.md
console.log("checking command tsc -w");
// ====================== EXAMPLE of CLASS 
class User {
    /*  *******************************************************************  */
    constructor(email, name) {
        this.city = ""; /*   not using in constructor, so we need an initializer , i.e = ""      */
        this.phoneNum = 0; /*   public , if not mentioned anything by default                       */
        this._id = 213; /*   read only cant be modified                                          */
        this.atmDetail = 234424532334; /*   cant use outside the class, not even extended class                 */
        _User_atmCVV.set(this, 231); /*   same as private , just another syntax                               */
        this.count = 1; /*   can be use in class, and extended class, not outside                */
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
_User_atmCVV = new WeakMap();
const sarthakUser = new User("s@b.com", "sarthak");
sarthakUser.city = "kanpur";
sarthakUser.phoneNum = 9076782112;
// sarthakUser._id = 909
/*  read only : can not edit */
// sarthakUser.atmDetail     
/*   prvate : can not use outside */
// ==================== PROFFESIONAL WAY OF WRITING
class User2 {
    constructor(email, name, _id = 213, _courseCount = 1, _courseCountPublic = 1) {
        this.email = email;
        this.name = name;
        this._id = _id;
        this._courseCount = _courseCount;
        this._courseCountPublic = _courseCountPublic;
        this.email = email;
        this.name = name;
    }
    //========== getter  and setter example
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    /* private variable cant be use outside the class
     * but how make getter and setter
     * so that user can access private variable outside class also, but not derectly
     * but via getter and setters
     */
    get courseCount() {
        return this._courseCount;
    }
    // IMPORTANT : in setter , you cant make a setter return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should me 1");
        }
        this._courseCount = courseNum;
    }
    // ================= private method example 
    deleteToken() {
        console.log("token deleted");
    }
}
const sarthakUser2 = new User2("s@b.com", "sarthak");
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 1 
        /* its access modifier was private, cant be use in exted class */
        this._courseCountPublic = 4;
        /* its access modifier was protected, can be use in exted class */
    }
}
