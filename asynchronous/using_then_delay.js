let stocks = {
    fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"],
    toppings: ["Cherry", "Chocolate"],
    holders: ["Glass", "Cup", "Mug", "Cone"],
    beverages: ["Water", "Ice"]
};

// Utility function to simulate a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to select a fruit
let select_fruit = (n) => {
    return delay(2000).then(() => {
        console.log(`${stocks.fruits[n]} fruit selected`);
    });
};

// Function to simulate production status
let production_status = () => {
    return delay(0).then(() => {
        console.log("Production has been started");
        return delay(2000); // Simulate time for chopping
    }).then(() => {
        console.log("Food has been chopped");
        return delay(1000); // Simulate time for pouring beverages
    }).then(() => {
        console.log(`${stocks.beverages[0]} and ${stocks.beverages[1]} have been poured`);
        return delay(1000); // Simulate time for machine start
    }).then(() => {
        console.log("The machine has started");
        return delay(1000); // Simulate time for adding ice cream
    }).then(() => {
        console.log(`Ice cream put into the ${stocks.holders[3]}`);
        return delay(3000); // Simulate time for adding toppings
    }).then(() => {
        console.log(`${stocks.toppings[1]} and ${stocks.toppings[0]} are added to the ice cream`);
        return delay(3000); // Simulate time for serving
    }).then(() => {
        console.log("Ice cream has been served");
        console.log("Ready for next order");
    });
};

// Execute the workflow
select_fruit(2).then(production_status);

