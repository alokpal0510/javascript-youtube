
const mysym = Symbol("key1");
const myobj = {
    name :"Alok",
    "full name":"Alok Pal",
    age : 21,
    mysym : "keyone", // wromg way to declare symbol in object 
    [mysym] : "keyone", //correct way 
    email : "alok@gmail.com",

}
//two ways of accesing but better is second
// console.log(myobj.age);
// console.log(myobj["age"]);
// //console.log(myobj.fullname); // by this way we cant acess if key declared  like string so better is to use suare bracket
// console.log(myobj["full name"]);
// console.log( myobj["mysym"]); // it is giving write value but it not how symbol is declared and accesed
// //correct method to acces symbol in the object 
// console.log(typeof myobj[mysym]);
// console.log(myobj);
myobj.greeting = function(){
    return("Hello user")
}
myobj.greeting2 = function(){
    return (`hello user , ${this.name}`)
}


// console.log(myobj.greeting())
// console.log(myobj.greeting2())
const obj1 ={ 1 : "a" , 2 :"b"};
const obj2 ={ 3 : "a" , 4 :"b"};

console.log(obj1);
const obj3 =Object.assign(obj1 ,obj2);// in this obj1 also gets change because assign(target , source )
//so here obj1 become the target where changes are made 
const obj4 =Object.assign({},obj1 ,obj2); //why not give a empty target so original object doesnt change 
console.log(obj3);



