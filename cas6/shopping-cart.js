class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products
    }

    get totalPrice(){
        // const total = 0
        // this.products.forEach(product => {
        //     total += product.price
        // })
        // return total

        const total = this.products.reduce((prev,curr) => {
           return prev + curr.price
        }, 0)

        return total
    }
}

const Milk = new Product('milk',30)
const Bread = new Product('bread', 20)

const Breakfast = new ShoppingCart([Milk,Bread])

console.log(Breakfast.totalPrice)
