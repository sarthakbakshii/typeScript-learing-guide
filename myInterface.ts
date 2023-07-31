interface User {
    readonly dbId : number
    email : string,
    userId: number,
    googleId ?: string,
    startTrail() : string,
    getCoupon(couponName : string) : number
}

/*
 * You can also write :
 * 
 * startTrail : () => string
 *          OR
 * startTrail() : string,   [ a function returning a string ]
 * 
 * =====================================
 * getCoupon : ( couponName : string) => number
 *          OR
 * getCoupon(couponName : string) : number [couponNAme is just a variable, not compulsary to use same ]
 * 
 */ 



interface User {
    githubToken: string
}

/* 
 * if you forget to add some value
 * you can add it like this also
 *
 * AKA : reopening of interface
 * 
 */

const sarthak : User = { 
    dbId : 21, 
    githubToken: "github",
    email : "a@h" , 
    userId : 123,
    startTrail : () => "start trial",
    getCoupon : (name : "sb23") => 10
};

/*
 * ============= Inheritance ============
 */

interface Admin extends User{
    role : "admin" | "ta"  | "learner"
}

const sbAdmin : Admin = { 
    dbId : 21, 
    githubToken: "github",
    role : "admin",
    email : "a@h" , 
    userId : 123,
    startTrail : () => "start trial",
    getCoupon : (name : "sb23") => 10
};

export {}