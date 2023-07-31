"use strict";
const score2 = [];
const score = [];
// ===============================
function identityOne(val) {
    return val;
}
/* Take boolean or number as input, return boolean or number
 * here you have to write, logic for checking the type of input
 * to return the specific type
 */
function identityTwo(val) {
    return val;
}
/* take any type of input, and return any type
 * i.e, take number return string. or
 *      take string and return boolean
 * WRONG WAY
 * input and return type will never be same
 */
function identityThree(val) {
    return val;
}
/* her "Type" can be any, both last 2 example are same, can take any type of input
 * but this lock the type of input
 * and only the locled type can be returned
 * i.e, take number return number ( both type will be same )
 *      take string return string
 */
// most use way 
function identityFour(val) {
    return val;
}
identityFour({ brand: "", type: 0 });
// =============== complex case of array
// normal function
function getSearchProducts(products) {
    return products[3];
}
// arrow function
const getSearchProducts2 = (products) => {
    return products[3];
};
//  or
const getSearchProducts3 = (products) => {
    return products[3];
};
// <T,> => to show its not a jsx syntax, nothing else
// normal way with out generic
const getSearchProducts4 = (products) => {
    return products[3];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
