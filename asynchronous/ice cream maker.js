//callback hell
//pyramid of doom

let stocks = {
    
    fruits : ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"],
    toppings: ["Cherry", "Chocolate"],
    holders :["Glass","Cup","Mug","Cone"],
    beverages : ["Water","Ice"]
}
let select_fruit = (n,production) => {
    setTimeout(() => {console.log(`${stocks.fruits[n]} fruit selected`)
    
},2000)
production()
}
    

let production_status = () => {
    setTimeout(()=>{

        console.log("production has been started")
        setTimeout(()=>{
            console.log("Food has been chopped")

            setTimeout(()=>{
                console.log(`${stocks.beverages[0]} and ${stocks.beverages[1]} has been poured`)

                setTimeout(()=>{
                    console.log("the machine has started")
                    setTimeout(()=>{
                        console.log(`ice cream put into the ${stocks.holders[3]} `)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[1]} and ${stocks.toppings[0]} are added to the ice cream`)
                            setTimeout(()=>{
                                console.log("ice cream has been served ")
                                console.log("ready for next order ")

                            },3000)
                        },3000)
                    },1000)
                },1000)
            },1000)
        },2000)
    },0)
}
select_fruit (2, production_status)