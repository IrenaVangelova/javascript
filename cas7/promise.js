
//mock request
function connect () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('you are now connected to the JS academy course page')
            // reject('Could not connect')
        }, 3000);
        
    })
}

async function greeting(name) {
    console.log(`Welcome ${name}`)
    console.log('Connecting...')

    try {  
        const response = await connect() 
        console.log(response)
        console.log('Here you can browse')
        // console.log('Failed to connect')

    } catch (error) {
        console.log(error)
    } finally {
        // no matter what, executed
    }

}

greeting('Irena')

// promise chaining
connect().then((response) => { console.log(response)}).catch(err => {console.log(err)})