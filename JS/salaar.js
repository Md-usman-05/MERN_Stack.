const vegetables = ["carrot", "potato", "brinjal", "onion", "cabbage","cauliflower"];
// vegetables.forEach(veg=>{
//     console.log(veg);
// });
function something(m,callback){
    console.log(m + " something something");
    callback();
}
function character(){
    console.log("casting : jayamravi,Thrisha");
}
// something("movie : ",character);
let promise = new Promise((resolve,reject)=>{
 resolve("Success");}
);
//promise.then(result=>console.log(result));
async function sum()
{
    return 5+6; 
}
sum().then(console.log);
let std={
    name:"Heshwanth",
    age:21,
};
let json=JSON.stringify(std);
console.log(json);
