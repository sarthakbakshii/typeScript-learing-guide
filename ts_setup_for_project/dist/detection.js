"use strict";
// THIS IS AN CAUTIONARY EXAMPLES
// TYPE NARROWING
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// ==================
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return " fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
// ===========================
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
