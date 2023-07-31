/*
 * TUPLES : not just what is inside the array, 
 * even order also matters
 * 
 * tuples is only available in TS not is JS
 *
 */

const user : (string | number)[] = [1 , "sb"]
let tUser : [string , number , boolean]

tUser = [ "sb", 1221 , true] 
/* ok, fine        */

// tUser = [ true , 1211 , "sb"]
/*  will give error as order is not followed    */



//====================EXAMPLE 2

type User = [ number , string]
const newUser : User = [122, "sb@gmail.com"]
/*  allowed   */

// const n : User = [ 123, "s@d" , true]
/*   only 2 value of defined order is required