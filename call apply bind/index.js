let userdetails = {
    name : "Rusheekesh",
    age :20,
    designation : "Engineer",
    printdetails: function (){
    //    console.log(name) //The declaration was marked as deprecated here, it will throw an error
        console.log(this.name);
    }
}
userdetails.printdetails();

let userdetails1 = {
    name : "Shradha",
    age :20,
    designation : "Doctor",
   
}
userdetails.printdetails.call(userdetails1) // shradha
//using call you can borrow the function calles function borrowing 
// you can call the value of the other function


let userdetails2 = {
    name : "Rohit",
    age :21,
    designation : "Doctor",
   
}

let a = function () {
    console.log(this.name);
}

a.call(userdetails2) // Rohit
// we are passing the object into this generic function
//we can call the value of the other function even if it doesn't belong there


let b = function (state) {
    console.log(this.name+" "+state);
}
b.call(userdetails2 , "pune") // Rohit pune
b.apply(userdetails2 , ["pune" ,"Nashik","Lonawala"]) // Rohit pune
// you can pass the array in the function using     apply    and if we are showing only the variable only one 
//variable will pass or show and even there are more arguments remaining the 
//function will not throw an error


//Bind
let c = b.bind(userdetails,"Washi")
c(); // Rusheekesh Washi
console.log(c) //we dave the copy of the function inside the c 
//we can call it also 
//and sometimes it will give output if we console log it
// [Function: bound b]