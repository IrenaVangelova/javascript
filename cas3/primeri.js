const niza = ["orange", 300 , "Banana", 100 , "Kale", "chocolate", 60 , 50]

let products = []
let prices = []

for(let i = 0; i < niza.length; i++) {
    if(typeof niza[i] === "string")
        products =  [...products, niza[i]]
    else if (typeof niza[i] === "number")
        prices = [...prices , niza[i]]
}

console.log(products,prices)

let nizza = [['a','b'], ['c','d'], ['e','f','g'], ['h'], 'test' , 1]

let result = nizza.flat()
let rezultat = []

console.log(result)

for(let i =0; i< nizza.length; i++) {
    element = nizza[i]
    if(element instanceof Array) 
        rezultat = [...rezultat, ...element]
    else 
        rezultat = [...rezultat, element]
}

console.log(rezultat)


const users = [
    { username: 'Irena' , password: 123, email: 'irena@gmail.com'},
    { username: 'Koco' , password: 223, email: 'koco@yahoo.com'},
    { username: 'Stefan' , password: 323, email: 'stefan@hotmail.com'},
    { username: 'Nikola' , password: 133, email: ''}
]

for ( let user of users) {
    const { email, username}  = user
    // namesto user.email i  vo ifot
    // const email = user.email
    // const username = user.username
    if(!email){
    console.log(username + ' nema validna email adresa')
    }
}


const student1 = {
    index: 1232 ,
    name: 'Irena',
    year: 2020,
    grades: {
        math: 10,
        physics: 9,
        chemistry: 8
    }
}

const student2 = {
    index: 1244 ,
    name: 'Stefan',
    year: 2020,
    grades: {
        math: 10,
        physics: 8,
        chemistry: 6
    }
}

const student3 = {
    index: 1262 ,
    name: 'Alek',
    year: 2020,
    grades: {
        math: 9,
        physics: 6,
        chemistry: 7
    }
}


const students = [student1, student2,student3]

let mathTotal = 0
let physTotal = 0
let chemTotal = 0

for (let i =0; i< students.length; i++){
    const student = students[i]
    const {math,physics,chemistry} = student.grades
    mathTotal += math
    physTotal += physics
    chemTotal += chemistry
}

console.log('Math avg: ' + (mathTotal / students.length))
console.log('Phys avg: ' + (physTotal / students.length))
console.log('Phys avg: ' + (chemTotal / students.length))
