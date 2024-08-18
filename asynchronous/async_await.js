let stocks = {
    fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"],
    toppings: ["Cherry", "Chocolate"],
    holders: ["Glass", "Cup", "Mug", "Cone"],
    beverages: ["Water", "Ice"]
};

let is_shop_open = true;

// if false  then 
// customer left  shop is closed
// day id ended shop id cloded

// let order = () => { 
//     return new Promise((resolve , reject) => {
//         if(1){
//             resolve
//         }else{
//             reject
//         }
//     })
// }       
// order
// .then
// .then
// .then
// .then
// .then
// .then
// .then
// .then
    

// async function order(){
//     try{
//         await abc
//     }
//     catch(error){
//         console.log("abc does not exist")
//     }
//     finally{
//         console.log(" code runs anyway")
//     }
// }

// order()
// .then(() =>{
//     console.log("order successful")
// })

// .finally(() =>{
//     console.log("finally block")
// })





// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {

//        const a = setTimeout(() => {
//         resolve(
//             console.log("wehich toppings would you like to order")
//         )
//         }, 3000);


        
//     });
// }


// async function kitchen () {
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice()
//     console.log("D")
//     console.log("E")
// }

// kitchen()
// console.log("cleaning the dishes")
// console.log("cleaning the table")
// console.log("taking others order")



function timeout(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            console.log("shop is open")
            setTimeout(resolve , ms ) 
        }
        else{
            reject("shop is closed")
        }
})
}

async function kitchen(){
    try{
        await timeout(2000)
        console.log(`${stocks.fruits[0]} is selected`)

        await timeout(3000)
        console.log("start the production")

        await timeout(1000)
        console.log("cut the fruits")

        await timeout(3000)
        console.log(`${stocks.beverages[1]} and ${stocks.beverages[0]} are poured`)

        await timeout(2000)
        console.log("start the machine")

        await timeout(2000)
        console.log("machine is working")

        await timeout(2000)
        console.log(`${stocks.toppings[1]} and ${stocks.beverages[0]} are added to the ice cream`)

        await timeout(2000)
        console.log("ice cream is served")
    }
    catch(error){
        console.log("customer left ", error)
    }
    finally{
        console.log("day id ended shop id cloded")
    }
}

kitchen();