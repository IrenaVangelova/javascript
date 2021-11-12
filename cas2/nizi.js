const a =5
const b=6

const broevi = [a,b]

const denovi = ["ponedelnik","vtornik", "sreda"]

// console.log(denovi)

denovi[2] = "petok"

// console.log(denovi[2])

denovi[3] = "cetvrtok"
denovi[4] = "petok" 
denovi[5] = "sabota"
denovi[6] = "nedela"

denovi.push("a","b")

const izbrisan = denovi.pop()

denovi.shift()
denovi.unshift("poceten")

console.log(denovi)