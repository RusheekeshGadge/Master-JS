let stocks = {
    fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"],
    toppings: ["Cherry", "Chocolate"],
    holders: ["Glass", "Cup", "Mug", "Cone"],
    beverages: ["Water", "Ice"]
};

let is_shop_open = true;
let order = (time,work) =>{
    return new Promise((resolve, reject) => {
        if (is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
        }else{
            reject(console.log("sorry our shop is not open"))
        }
    })
}
order(2000,() => console.log(`${stocks.fruits[2]} was selected`))

.then(() => {
    return order(0 , ()=> {
        console.log("production had been startred")
    })
})

//we cannnot have semicolon between then
.then(() => {
    return order(0, () => {
        console.log("production had been started");
    });
})
.then(() => {
    return order(1000, () => {
        console.log(`${stocks.beverages[0]} and ${stocks.beverages[1]} has been selected`);
    });
})
.then(() => {
    return order(1000, () => {
        console.log("the fruit and beverage has been poured");
    });
})
.then(() => {
    return order(1000, () => {
        console.log("the machine has been started");
    });
})


.then(() => {
    return order(1000, () => {
        console.log(`the ice cream has been placed on ${stocks.holders[3]}`);
    });
})

.then(() => {
    return order(1000, () => {
        console.log(` ${stocks.toppings[1]}  and ${stocks.toppings[0]} has been added to the ice cream`);
    });
})

.then(() => {
    return order(1000, () => {
        console.log("ice cream has been served");
    });
})

.catch(() => {
    console.log("customer has been left")
})


// let is_shop_open = false;
// sorry our shop is not open
// customer has been left


.finally(() => {
    console.log("day ended our shop is closed");
});
