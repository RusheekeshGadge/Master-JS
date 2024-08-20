const arr = [1,2,3,4,5,6,7,8,9,10];
//filter odd values
function isodd(x){
    return x % 2!== 0;
}
const output = arr.filter(isodd)
console.log(output);