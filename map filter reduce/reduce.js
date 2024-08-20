const arr =[1,2,3,4,5,6,7,8,9,10];
//take the array and comes with the single element

//sum off array
// function sum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sum(arr))

const output = arr.reduce(function(acc ,curr) {
    //acc iterator accumulates each and every value
    // like sum += arr[i]
    //curr is the current value
    acc = acc + curr;
    return acc;
    
}, 0) // initial value of the accumulator
console.log(output)



// max value off array
// function maxvalue(arr) {
//     let max = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxvalue(arr))

const output2 = arr.reduce(function(acc,curr) {
    if (curr>acc){
        acc = curr
    }
    return acc;
},0)

console.log(output2)