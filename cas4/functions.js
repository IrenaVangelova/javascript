function helloWorld () {
    let a = 'Hello!'
    console.log(a)
}

helloWorld()

function sum (param1,param2) {
    const result  = param1 + param2
    return result
}

console.log(sum(6,7))

//EXAMPLES

function stringLength(word) {
    return word.length
}

console.log(stringLength('Irena'))

let date = new Date()
console.log(date)

const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

console.log(day,month + 1,year)



function reformatDate (date) {
    if(!date || !(date instanceof Date))
        return 'Nevaliden datum'

    else {

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getUTCFullYear()

        return (day + "/" + month + "/" + year)
    }
}


console.log(reformatDate(date))



