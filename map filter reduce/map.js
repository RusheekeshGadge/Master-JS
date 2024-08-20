const arr = [1,2,3,4,5,6,7,8,9,10]
function double(x){
    return x * 2;  
 
}

const output = arr.map(double); //  => 2,  4,  6,  8, 10, 12, 14, 16, 18, 20
console.log(output);

function binary(x){
    return x.toString(2);
}

const binaryOutput = arr.map(binary); 
console.log(binaryOutput);
// [
//     '1',    '10',   '11',
//     '100',  '101',  '110',
//     '111',  '1000', '1001',
//     '1010'
// ]

