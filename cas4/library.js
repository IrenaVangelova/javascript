const books = [
    {
        isbn: 10, 
        name: 'Crime and Punishment', 
        author: 'Fyodor Dostoyevsky', 
        year: '1866',
        available: false

    },
    {
        isbn:20, 
        name:'Harry Potter', 
        author:'J K Rowling', 
        year:'2000',
        available: false

    },
    {
        isbn:30, 
        name:'The Hobbit', 
        author:'J K Tolkien', 
        year:'1880',
        available: true

    },
    {
        isbn:40, 
        name:'Dune', 
        author:'Fyodor Dostoyevsky', 
        year:'1866',
        available: true
    }
]

// `TEXT ${promenliva}` = 'text' + promenliva

let isAvailable= 'Momentalno na zaliha: \n'
let isNotAvailable = 'Momentalno ne se na zaliha: \n'

for(let book of books) {
    if(book.available)
        isAvailable += `${book.author} - ${book.name}, \n`
    else
        isNotAvailable += `${book.author} - ${book.name}, \n`
}

console.log(isAvailable)
console.log(isNotAvailable)