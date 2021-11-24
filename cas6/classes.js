class Book {
    constructor (isbn, name, author, year){
        this.isbn = isbn
        this.name = name
        this.author = author
        this.year = year
    }

    getName() {
        return this.name
    }

    getIsbn () {
        return this.isbn
    }
}

const kniga1 = new Book(100,'Crime and punishment', 'Fyodor Dostoyevsky',1789)

console.log(kniga1.getName())
kniga1.year = 2000
console.log(kniga1.year)


class Rectangle {
    constructor(width,height) {
        this.width = width
        this.height = height
    }

    get Area(){
        return this.width * this.height
    }

    set Width(newWidth) {
        this.width = newWidth
    }
}

const rect1 = new Rectangle(100,100)
console.log(rect1.Area)