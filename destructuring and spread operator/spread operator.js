// {
    
//     // {
        
//     let arr = [3,5,7,9]
//     let obj1 = {...arr}
//     // console.log(obj1)  => { '0': 3, '1': 5, '2': 7, '3': 9 }
//     // }
    
    
//     function sum(v1 , v2 , v3) {
//         return v1 + v2 + v3
//     }
    
//     // console.log(sum(obj1)); => [object Object]undefinedundefined
//     // console.log(sum(...arr));  => 15
// }
    
let obj2 = {
    name: "Rusheekesh",
    company: "ICEM",
    address: "Talegaon"
}
// console.log({...obj2,name : "Ranjit"})  //=> { name: 'Ranjit', company: 'ICEM', address: 'Talegaon' }
console.log({name : "Ranjit" ,...obj2}) // =>  name: 'Rusheekesh', company: 'ICEM', address: 'Talegaon' }
