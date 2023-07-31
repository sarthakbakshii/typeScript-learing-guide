// const superhero = ["spiderman" , "batman"]
// superhero.push("hulk")


//======== defining array of string

const superhero : string[] = ["hulk" , "spiderman" ];
// or
const superHero : Array<string> = ["hulk" , "spiderman" ];

//======== defining array of number

const sorted : number[] = [1,2,3,4,5,6];
// or
const sortedNum : Array<number> = [1,2,3,4,5,6];


//======= GOOD EXAMPLE =========

type User = {
    name : string
    isActive : boolean
}

const allUser : User[] = []
allUser.push({ name : "sarthak" , isActive : true})
allUser.push({ name : "bakshi" , isActive : false})

console.log(allUser) // [{ name: 'sarthak', isActive: true },{ name: 'bakshi', isActive: false }]

// ============ array OF NUMBER OF NUMBER ARRAY

const MLModels : number[][] = [
    [1,2,3],
    [4,5,6],
]


const getSearchProducts3 = ( products : number[] ) : number => {
   return products[3]
}

export {}


