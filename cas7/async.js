// // server.reguest('www.google.com')

// // searchbtn.click()

// async function greeting(name) {
//     console.log(`Hello ${name}`)
//     await server.reguest('www.google.com')
    
// }

// greeting('Irena')



setTimeout(() => {
    console.log(`timeout: Great to have you here`)
}, 4000);

const myInterval = setInterval(() => {
    console.log(`interval: Great to have you here`)
}, 2000);

setTimeout(() => {
    clearInterval(myInterval)
}, 11000);