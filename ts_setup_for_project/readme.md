<!--  step 1 -->
tsc --init

create tsconfig.json
<!-- step 2 -->
npm init

create package.json

<!-- step 3 -->
create :
index.html
dist { dir }
src > index.ts

<!-- in index.html you link dist\index.js as all ts code will convert to js into that same file mentioned -->

<!-- step 4 -->
in tsconfig.json, find "outDir"
this is the place where you specify the location of output directory

in this case : "outDir": "./dist", 

<!-- inportant info -->

if you make changes in index.ts 
and by running 
            tsc .\src\index.ts
it will create a index.js in src only

run >      tsc -w    { this is watch mode}

it will keep on running the things,
and any change in ts file, it will watch it on base of tsconfig
and real time change it to js

<!-- step 5 -->
run live server for index.html


<!-- LEARNINGS  -->
[ A ]
wrong way :
        class User {
            constructor(email : string , name : string ){
                this.email : string = email;          <===
                this.name : string = name;            <===
            }
        }
         you can not do :=> 
         you have to define it on top of constructor 

right way : 
        class User {
            email : string
            name : string
            constructor(email : string , name : string ){
                this.email = email;                   <===
                this.name = name;                     <===
            }
        }

[ B ] Access modifier

Both are the ways of defining a private variable.
i.e, you cant use them outside class.
ex:
   a) private atmCVV : number = 231    { ts way of doing }
   b) #atmCVV : number = 231           { js way of doing }

protected variable can be use in class, and extended class, not outside

ex: protected atmCVV : number = 231

define it or not, it is public, accessible everywhere 
ex: 
     a) email : string
     b) public email : string
     
[ C ]

if you are assigning a variable not use in constructor, you have to add initializor ,

ex: 

        class User {
            email : string
            name : string
            city : string = "kanpur"           <===
            phNum : number = 212121212121      <===

            constructor(email : string , name : string ){
                this.email = email;
                this.name = name;
            }
        }

[ D ]

if a class is defined like : 

        class User {
            email : string
            name : string
            constructor(email : string , name : string ){
                this.email = email;
                this.name = name;
            }
        }

wrong way : 
         const newUSer = new User(email = "s@b.com" ,name = "sarthak");

right way : 
         const newUSer = new User("s@b.com" ,"sarthak");

[ E ]
professional way : 

class User2 {
    constructor( 
        public email : string , 
        public name : string,
        readonly _id : number = 213,
        private _courseCount : number = 1
        ){
                this.email = email;
                this.name = name;
    }
}


[ F ]

getter and setter are same as js get and set method
doesnt always means, you use it for a private property
we use it for both private and public 

but mostly use : to access some private property with additional logics 

[ G ]
you can not define a return type in setter method

wrong way :     
        set courseCount(courseNum) : string {}
        set courseCount(courseNum) : void {}
right way :     
        set courseCount(courseNum) {}

[ H ]
abstract classes : ( view file for full explaination )

abstract classes cant not create object on there own,
but help in defining the class that are inheriting them,
get the beter structure of their classes and to put some cumpulsory thing,
if you want to add some compulsary method, you can make them abstract 

its more like interface 

[ I ]
generic type : ( view file for full explaination )

function identityThree<Type>( val : Type) : Type {
    return val
}

her "Type" can be any, both last 2 example are same, can take any type of input
but this lock the type of input
and only the locled type can be returned
i.e, take number return number ( both type will be same )
     take string return string 


 most use way :  

function identityFour<T>(val : T) : T{
    return val
}

ADVANTAGE TO USE THIS :

We can create our own costom types


interface Bottle{
    brand : string
    type : number
}

identityFour<Bottle>( {brand : "" , type : 0})

KEY POINT :

function identityFour<T>(val : T) : T{
    return val
}

const identityFour = <T>(val : T) : T => {
    return val
}

can also be writen with ,

const identityFour = <T,>(val : T) : T => {
    return val
}

<T,> => to show its not a jsx syntax, nothing else