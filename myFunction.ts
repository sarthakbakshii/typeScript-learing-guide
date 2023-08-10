// functiuon

function addTwo(num : number){
    return num + 2
}

addTwo(5)

function signinUser( name : string , email : string , isPaid : boolean){}
signinUser("sarthak","@gmail.com",true)


//--- how a set a default value
let loginUser = (name : string , email : string , isPaid : boolean = true) => {}
loginUser("sarthak","s@g.com")

//-------- type check on returning a value

let result;

const addNum = ( num : number) =>{
    // return num + 5

    /* suppose a naive dev 
     * come and return a string 
     * from this function
     * 
     * So how to add a return value check ??
     */
    return "sarthak"
}

result = addNum(6)

console.log(result)

//solution ===>
//
// this is return type check  ------v
const addNum2 = ( num : number) : number => num + 5


//=========================================

const getapiREs = (header : number): number | string =>{
    if( header > 5 ) return 30
    return "404 not found"
}


//=========================================

const heros = [ "thor" , "hulk" , "ironman"];

heros.map( (hero) : string =>{
    return `hero is ${hero}`
})

// above case value inside hero array can be of any type so we hant gave any typecheck for the hreo.
// but we know that what type of value the function is going to return.
// so we have defined the return type.


//=========================================

// the function that is not returning anything we should use the void as return type ( good practice )
// return undefined
function consoleError(errMessage : string) : void  {
    console.log( errMessage )
}
consoleError("error not found")


//=========================================

// return nothing
function handleError(errMessage : string) : never  {
    throw new Error( errMessage )
}
consoleError("error not found")


const getSearchProducts3 = ( products : number[] ) : number => {
   return products[3]
}

export {}

/*

void return undefined
never return nothing 
*/
