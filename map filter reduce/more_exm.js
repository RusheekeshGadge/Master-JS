const people = [
{ firstname: "John", lastname : "Doe", age : 30 },
{ firstname: "Jane", lastname : "Smith", age : 25 },
{ firstname: "Michael", lastname : "Johnson", age : 40 },
{ firstname: "Emily", lastname : "Brown", age : 35 },
{ firstname: "David", lastname : "Williams", age : 28 }
];

console.log(people);

//list of full names

let fullNames = people.map(person => `${person.firstname} ${person.lastname}`);
console.log(fullNames);
// [
//     { firstname: 'John', lastname: 'Doe', age: 30 },
//     { firstname: 'Jane', lastname: 'Smith', age: 25 },
//     { firstname: 'Michael', lastname: 'Johnson', age: 40 },
//     { firstname: 'Emily', lastname: 'Brown', age: 35 },
//     { firstname: 'David', lastname: 'Williams', age: 28 }
//   ]
//   [
//     'John Doe',
//     'Jane Smith',
//     'Michael Johnson',
//     'Emily Brown',
//     'David Williams'
//   ]


// filter people older than 30

let olderThanThirty = people.filter(person => person.age > 30);
console.log(olderThanThirty);
// [
//     { firstname: 'Michael', lastname: 'Johnson', age: 40 },
//     { firstname: 'Emily', lastname: 'Brown', age: 35 }
//   ]

const output1 = people.reduce(function(acc,curr){
    if(acc[curr.age] ){
        acc[curr.age] =  ++acc[curr.age];
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{})
console.log(output1)

// Sure, let's break down the code line by line:

// 1. `const output1 = people.reduce(function(acc, curr) {`
//    - Here, we are using the `reduce` method on the `people` object. The `reduce` method is used to reduce an array or in this case an object into a single value.
//    - The `reduce` method takes a callback function as an argument. This callback function will be called on each element of the object.
//    - `acc` is the accumulator that will accumulate the result.
//    - `curr` is the current element being processed.

// 2. `if (acc[curr.age]) {`
//    - This line checks if the `acc` object already has a property with the key `curr.age`.
//    - If the property exists (i.e., if the age is already a key in the accumulator object), it will evaluate to true.

// 3. `acc[curr.age] = ++acc[curr.age];`
//    - If the age is already a key in the accumulator object, this line increments the count of that age by 1.
//    - The `++` operator is used to increment the value before assignment.

// 4. `} else {`
//    - If the age is not already a key in the accumulator object, this block of code will be executed.

// 5. `acc[curr.age] = 1;`
//    - This line sets the count of the current age to 1 in the accumulator object.

// 6. `return acc;`
//    - This line returns the accumulator object after processing the current element.

// 7. `}, {});`
//    - The empty object `{}` is provided as the initial value for the accumulator.
//    - This object will store the counts of each unique age in the `people` object.

// 8. `console.log(output1);`
//    - Finally, the `output1` object, which contains the counts of each unique age in the `people` object, is logged to the console for output.

// This code essentially counts the occurrences of each unique age in the `people` object and stores the counts in the `output1` object.



const output2 = people.filter((x) => x.age > 30 ).map((x) => x.firstname);
console.log(output2)
// [ 'Michael', 'Emily' ]