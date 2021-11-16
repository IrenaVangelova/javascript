const animals = ['dog', 'cat', 'camel']
const numbers = [5,6,7,8,9]

console.log(numbers.slice(1,3))

numbers.splice(1,1,200,300,400)
console.log(numbers)


// spread
console.log(...animals)

const nova = [...animals, ...numbers]
console.log(nova)

const moreAnimals = ['zebra', ...animals, 'parrot']
console.log(moreAnimals.join())

const [first, second, ...elements] = moreAnimals
console.log(first,second)
console.log(elements)