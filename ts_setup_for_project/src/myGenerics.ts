const score2 : number[] = []
const score : Array<number> = []

// ===============================

function identityOne(val : boolean | number) : boolean | number{
    return val
}
/* Take boolean or number as input, return boolean or number 
 * here you have to write, logic for checking the type of input
 * to return the specific type
 */

function identityTwo( val : any) : any{
    return val
}
/* take any type of input, and return any type
 * i.e, take number return string. or 
 *      take string and return boolean
 * WRONG WAY 
 * input and return type will never be same
 */

function identityThree<Type>( val : Type) : Type {
    return val
}
/* her "Type" can be any, both last 2 example are same, can take any type of input
 * but this lock the type of input
 * and only the locled type can be returned
 * i.e, take number return number ( both type will be same )
 *      take string return string 
 */

// most use way 

function identityFour<T>(val : T) : T{
    return val
}

/* ADVANTAGE TO USE THIS 
 * 
 * We can create our own costom types
 */

interface Bottle{
    brand : string
    type : number
}

identityFour<Bottle>( {brand : "" , type : 0})



// =============== complex case of array

// normal function
function getSearchProducts<T>(products : T[]) : T{
    return products[3]
}

// arrow function
const getSearchProducts2 = <T>(products : T[]) : T => {
    return products[3]
}

//  or
const getSearchProducts3 = <T,>(products : T[]) : T => {
    return products[3]
}
// <T,> => to show its not a jsx syntax, nothing else

// normal way with out generic
const getSearchProducts4 = ( products : number[] ) : number => {
   return products[3]
}


// ===============+++

interface DataBase {
    connection : string
    userName : string
    password : string
}

function anotherFunction<T, U extends DataBase>( valOne : T , valTwo : U) : object {
   return {
    valOne,
    valTwo
   }
}

// anotherFunction(3, {})

// ======================== big example

interface Quiz{
    name : string
    type: string
}

interface Course{
    name : string
    author: string
}

class Sellable<T,>{
    public cart : T[] = []

    addToCart(products : T){
        this.cart.push(products)
    }
}