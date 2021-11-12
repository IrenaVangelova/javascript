const animals = ["dog","parrot", "turtle",'giraffe']
const food = ["meat", "seeds", "leaf"]

// const result = [ 'dog', 'meat', 'parrot', 'seeds', 'turtle', 'leaf']

let result = []

let array = (animals.length > food.length) ? animals: food

for(let i = 0; i < array.length; i++) {
    if(animals[i]) result.push(animals[i])
    if(food[i]) result.push(food[i])
}

console.log(result)



const temp = [12,13,20,31,41,17]

let avg = 1
let sum = 0

for(let i = 0; i < temp.length; i++) {
    sum = sum + temp[i]
}

avg = sum / temp.length
console.log(avg)

//najtopol i najladen i prosecna

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

for(let i=0; i< temp.length; i++) {
    if(temp[i] > max) max = temp[i]

    if(temp[i] < min) min = temp[i]
}

console.log(max)
console.log(min)