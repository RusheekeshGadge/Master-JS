let stocks = {
    fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"],
    toppings: ["Cherry", "Chocolate"],
    holders: ["Glass", "Cup", "Mug", "Cone"],
    beverages: ["Water", "Ice"]
};

// Utility function to simulate a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to select a fruit
const select_fruit = async (n) => {
    await delay(2000);
    console.log(`${stocks.fruits[n]} fruit selected`);
};

// Function to simulate production status
const production_status = async () => {
    await delay(0);
    console.log("Production has been started");

    await delay(2000);
    console.log("Food has been chopped");

    await delay(1000);
    console.log(`${stocks.beverages[0]} and ${stocks.beverages[1]} have been poured`);

    await delay(1000);
    console.log("The machine has started");

    await delay(1000);
    console.log(`Ice cream put into the ${stocks.holders[3]}`);

    await delay(3000);
    console.log(`${stocks.toppings[1]} and ${stocks.toppings[0]} are added to the ice cream`);

    await delay(3000);
    console.log("Ice cream has been served");
    console.log("Ready for next order");
};

// Execute the workflow
const processOrder = async () => {
    await select_fruit(2);
    await production_status();
};

processOrder();
