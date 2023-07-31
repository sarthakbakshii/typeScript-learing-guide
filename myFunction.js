// functiuon
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function signinUser(name, email, isPaid) { }
signinUser("sarthak", "@gmail.com", true);
//--- how a set a default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("sarthak", "s@g.com");
//-------- type check on returning a value
var result;
var addNum = function (num) {
    // return num + 5
    /* suppose a naive dev
     * come and return a string
     * from this function
     *
     * So how to add a return value check ??
     */
    return "sarthak";
};
result = addNum(6);
console.log(result);
//solution ===>
//
// this is return type check  ------v
var addNum2 = function (num) { return num + 5; };
//=========================================
var getapiREs = function (header) {
    if (header > 5)
        return 30;
    return "404 not found";
};
//=========================================
var heros = ["thor", "hulk", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// above case value inside hero array can be of any type so we hant gave any typecheck for the hreo.
// but we know that what type of value the function is going to return.
// so we have defined the return type.
//=========================================
function consoleError(errMessage) {
    console.log(errMessage);
}
consoleError("error not found");
