const niza = [1, 5, 17, 90, 44,67, 157]

if(niza[0] % 2 === 0) {
    console.log(niza[0])
}

let vkupno = 0
for (let i = 0; i< niza.length ; i++) {
    if(niza[i] % 2 === 0) {
        console.log(niza[i])
        vkupno++
    } 
}

console.log(vkupno)


let nova = []
for (let i = 0; i< niza.length ; i++) {
    if(niza[i] % 2 !== 0) {
        nova.push(niza[i])
        
    } 
}
console.log(nova,nova.length)



const  br = [89, 12 , 55 , 4,  12, 89, 0, 7,7]

let novaa = []

for(let i = 0; i < br.length; i++) {
    for(let j = 0; j < br.length; j++){
        if(j !== j){
            if(br[i] === br[j]) {
            novaa.push(br[i])
            }
        }
    }
}
console.log(novaa)