const User = {
    name : "sarthak",
    email : "s@gmail.com"
}

function createUser({name : string , isPaid : boolean}){

}

createUser({name : "sarthak" , isPaid : false})

//======================


// returning object from a function 
function createCourse():{name : string , price : number}{
    return { name : "sarth" , price : 399}
}


//===================================

type User = {
    name : string;
    email : string;
    isActive : boolean; 
}

function crtUser( user : User ) : User{
    return { name : "" , email : "" , isActive : true}
}

crtUser({name :"" , email : "" , isActive : true})

//=========== READ ONLY keyword ==============


type Users = {
    readonly _id : number
    name : string;
    email : string;
    isActive : boolean; 
    creaditCardDetail ?: number   // optional
}


let newUser  : Users = {
    _id : 123,
    name : "s",
    email : "h@h.com",
    isActive : true
}

newUser.email = "s@s.com"
// newUser._id = 231   // read only , cant change


//============== useing both type

type cardNumber = {
    crdNumber :string
}
type cardDate = {
    cardDate: string
}

type cardDetail = cardDetail & cardDate & {
    cvv : number
}



export {}