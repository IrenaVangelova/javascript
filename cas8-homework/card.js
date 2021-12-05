const containerEl = document.createElement('div')
containerEl.className = "container"

async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => {
        
        data.forEach(element => {
            const cardItem = document.createElement('div')
            cardItem.className = "card-item"

            const cardImg = document.createElement('img')
            cardImg.src = "./user.png"

            const name = document.createElement('p')
            name.innerHTML = "<b>Name:</b> " + element.name;

            const address = document.createElement('p')
            address.innerHTML = `<b>Address:</b> ${element.address.city}, ${element.address.street}, ${element.address.suite}, ${element.address.zipcode}`

            const email = document.createElement('p')
            email.innerHTML = "<b>Email:</b> " + element.email;

            const phone = document.createElement('p')
            phone.innerHTML = "<b>Phone:</b> " + element.phone;

            const company = document.createElement('p')
            company.innerHTML = "<b>Company:</b> " + element.company.name;

            cardItem.appendChild(cardImg)

            cardItem.appendChild(name);
            cardItem.appendChild(address);
            cardItem.appendChild(email);
            cardItem.appendChild(phone);
            cardItem.appendChild(company);

            containerEl.appendChild(cardItem);
            document.body.appendChild(containerEl);
        });
    })
}

getUsers();


