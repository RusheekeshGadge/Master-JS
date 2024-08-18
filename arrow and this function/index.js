let a = {
    username : "Rusheekesh",
    age :20,
    welcomemessage :function(){
        console.log(`Welcome to our website, ${this.username}!`);
        // console.log(this)
        // {
        //     username: 'Rusheekesh',
        //     age: 20,
        //     welcomemessage: [Function: welcomemessage]
        //   }
    }

}
// a.welcomemessage()
// a.username = "Sam"
// a.welcomemessage()
// console.log(this) // {} current context

// const hello = () => {
//     let username = "Sam";
//     console.log(`Welcome to ${username})
// }
// hello()
const addition = (num1 ,num2) => {
    return (num1 + num2)
}
console.log(addition(2 ,7))

// const addition = (num1 ,num2) =>  (num1 + num2) implicit arrow function
//if use {} then you need to use return
// let 7>9 ?"true":"false"; using turnary operator