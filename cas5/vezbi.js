const rectangle = {
    width: 100,
    height: 100
}

function plostina(shape){
    return shape.width * shape.height
}
console.log(`Plostinata e: ${plostina(rectangle)}`)

//Team

const team = {
    wins: 3,
    losses: 4,
    draws: 2
}

function points(team){
    return ((team.wins * 3) + (team.losses * (-1)) + (team.draws * 1))
}
console.log(`Timot ima osvoeno: ${points(team)} poeni`)

//Animals

const myAnimals = [
    {
        type: 'horse',
        numberOfLegs: 4
    }, 
    {
        type: 'sheep',
        numberOfLegs: 4
    }, 
    {
        type: 'chicken',
        numberOfLegs: 2
    },
    {
        type: 'fish',
        numberOfLegs: 0
    },
    {
        type: 'dog',
        afe: 7
    }
    ]

function Legs(animals) {
    let allLegs = 0
    animals.forEach((animal) => {
        allLegs  = allLegs + (animal.numberOfLegs || 0)
    })

    return allLegs
}

console.log(`Vkupno ima ${Legs(myAnimals)} noze`)


const MoreThen4Legs = (animals) => {
    // const arr = []
    // animals.forEach((animal) => {
    //     if(animal.numberOfLegs >=4) {
    //         arr.push(animal)
    //     }
    // })

    const filterredAnimals = animals.filter((animal) => {
        return animal.numberOfLegs >= 4
    })

    const animalNames = filterredAnimals.map((animal) => {
        return animal.type
    })

    return animalNames
}

console.log(`Tie se: ${MoreThen4Legs(myAnimals)}`)


//Torta

function Cake(people,piecesCake){
    if(isNaN(piecesCake) || isNaN(people) || piecesCake < 1 || people < 1)
        return 'Error'

    return (piecesCake % people === 0)
}

console.log(Cake(4,9))


//Taksi


function PresmetajKilometri(price){
    const start = 50
    const next = 20
    let kilometars = 0

    if(price > 50)
        kilometars= 1


    const remainingPrice = price - start
    const remainingKilometars = remainingPrice /next

    kilometars += remainingKilometars

    return kilometars
}

console.log(PresmetajKilometri(321))

//Slog

function Slogovi(word) {
    const split = word.split(' ')
    let newArray = []
    for(let i =0;i<split.lenght; i++){
        if(split === 'a' || split === 'e' || split ==='u' || split ==='i' || split ==='o') {

        }
    }
}