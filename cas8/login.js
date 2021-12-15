const header = document.createElement('h1')
const body = document.getElementsByTagName('body')[0]
const form = document.getElementById('form')
const logoutButton = document.createElement('button')
logoutButton.innerText = 'Logout'
logoutButton.onclick = logout

const errorUser = document.createElement('p')
errorUser.innerText = 'Username is a mandatory field'
errorUser.style = "color: red;"

const errorPwd = document.createElement('p')
errorPwd.innerText = 'Password is a mandatory field'
errorPwd.style = "color: red;"

const usernameEl = document.getElementById('username')
const passwordEl = document.getElementById('password')

function login () {

    const username = usernameEl.value
    const password = passwordEl.value

    sessionStorage.setItem('username', username)
    sessionStorage.setItem('password', password)

    if(!username) {
        usernameEl.insertAdjacentElement('afterend',errorUser)
        return  
    }
    if(!password) {
        passwordEl.insertAdjacentElement('afterend',errorPwd)
        return 
    }

    // const msg = `Welcome ${username}` 
    // header.innerText = msg
    // body.prepend(header)

    window.location.href = "./home.html"

    body.removeChild(form)
    body.appendChild(logoutButton)

    // window.location.href = "/home.html"
}

function logout(){
    body.removeChild(header)
    body.removeChild(logoutButton)
    body.appendChild(form)
    const username = document.getElementById('username').value = ""
    const password = document.getElementById('password').value = ""
}

function disablePageReload(event) {
    event.preventDefault()
} 

function userNameChanged(event) {
   if(event.target.value && errorUser !== null) {
       form.removeChild(errorUser)
   }
}

function passwordChanged(event) {
    const { value } = event.target

    if(!value.includes('@') || !value.includes('.')){
        passwordEl.innerText = 'PAssword format is invalid (@ .) '
        passwordEl.insertAdjacentElement('afterend',errorPwd)
    }
    else
        form.removeChild(errorPwd)
}

