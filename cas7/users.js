async function getData () {
let users = []
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const users = await response.json()
    // console.log(users)
} catch (err) {
    users = []
    console.log(err)
} finally {
    console.log(users.map(user => user.name))
}
}

getData()

// const obj = { name: 'Irena', age: 24 }

// JSON.stringify({name: 'Irena', age: 24})
// JSON.parse({"name": 'Irena', "age": 24})