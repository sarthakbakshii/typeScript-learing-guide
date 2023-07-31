"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "sarthak",
    email: "s@gmail.com"
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "sarthak", isPaid: false });
//======================
// returning object from a function 
function createCourse() {
    return { name: "sarth", price: 399 };
}
function crtUser(user) {
    return { name: "", email: "", isActive: true };
}
crtUser({ name: "", email: "", isActive: true });
var newUser = {
    _id: 123,
    name: "s",
    email: "h@h.com",
    isActive: true
};
newUser.email = "s@s.com";
newUser._id = 231;
