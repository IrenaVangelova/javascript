const covek = {pol: "Maski", visina: 170, tezina: 70, rasa: ''}

console.log(covek.pol)

const mojPol = covek.pol

covek.pol = 'Zenski'
covek.visina = 160

console.log(covek.pol)

covek.rasa = "Bela"

delete(covek.rasa)

console.log(covek)

const covek2 = {...covek , tezina: 60, rasa: 'crna', mbr: 43534534}

console.log(covek)
console.log(covek2)
console.log(Object.keys(covek2))

const student = {
    index: 1232 ,
    name: 'Irena',
    year: 2020,
    grades: {
        math: 10,
        physics: 9,
        chemistry: 8
    }
}

console.log(student.grades.math)