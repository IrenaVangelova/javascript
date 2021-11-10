
let a
let zbir = 0

for (let a = 1; a < 11 ; a++) {
    zbir = zbir + a;
}

console.log(zbir)

for (let b = 10; b > 0 ; b--) {
    console.log(b)
}

for (let i = 1, j = 10; i <= 10; i++) {
    
    console.log(`${i} + ${j} = ${i+j}`)
    j--;
}

 
// let proizvodd = 1
// for(let n = 10; n > 0; n--){
//     proizvodd = proizvodd * n
    
// }

// console.log(proizvodd)

let n = 1
let proizvod = 1
while(n < 11){
    proizvod = proizvod * n
    n++
}

console.log(proizvod)