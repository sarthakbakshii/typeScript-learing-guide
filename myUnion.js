var score = 33;
// but it can we string and number
var scores = 33;
scores = 44;
scores = "55";
var sarthak = { name: "sarthak", id: 21 };
sarthak = { userName: "sarth", id: 43 };
// =========== PROBLEM WITH UNION TYPE
function getDbId(id) {
    // id.toLowerCase()
    /*
     * as number | string become a new type of its own
     * so it will not do a single, datatype inbuilt function
     */
    if (typeof id === "string")
        id.toLowerCase();
    if (typeof id === "number")
        id + 2;
}
// ===========  ARRAY of both string and number
// const data : number[] = [ 1,2,3,"4"]  
/* not allowed  */
// const data : string[] = [ 1,2,3,"4"]  
/* not allowed  */
// const data : string | number[] = [ "1", "2", "3"]  
/* not allowed  */
// const data : string[] | number[] = [1 ,2 ,"#"]  
/* either all number or either all string but both both together  */
// const data : any[] = [ 1, 2, "3"]
/* bad way */
var data = [1, 2, "3"];
/* best way  */
//============= very very strict 
var seatAllotment;
seatAllotment = "aisle"; /* possible */
// seatAllotment = "crew"   /* not allowed, stricked check over 3 values only
