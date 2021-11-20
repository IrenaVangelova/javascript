// function convert(degree) {
//     var x;
//     if (degree == "C") {
//       x = document.getElementById("c").value * 9 / 5 + 32;
//       document.getElementById("f").value = Math.round(x);
//     } else {
//       x = (document.getElementById("f").value -32) * 5 / 9;
//       document.getElementById("c").value = Math.round(x);
//     }
//   }




function celToFahr(celsius) {
    let cTemp = celsius
    let cToFahr = (cTemp * 1.8) + 32
    let message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.'
    console.log(message)
}

function fahrToCel(fahrenheit) {
    let fTemp = fahrenheit
    let fToCel = (fTemp - 32) / 1.8
    let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.'
    console.log(message)
} 
celToFahr(30)
fahrToCel(90)

function palindrome (str) {
    const split = str.split('')

    const reverseValues = split.reverse()
    const reverseString = reverseValues.join('')

    if(str == reverseString) {
        console.log('Its a palindrome')
    }
    else {
        console.log('Its not a palindrome')
    }
}

palindrome('irena')
palindrome('123321')



function longestWord(str){
    let split = str.split(' ')
    let longest = 0
    let word
    for(let i = 0; i < split.length; i++){
        if(split[i].length > longest) {
            longest = split[i].length
            word = split[i]
        }

        
    }
    return word
}

console.log(longestWord("Irena brrr aak a  irena irena"))

