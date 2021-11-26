class CoffeeMachine {
    constructor(water,coffee,milk){
        this.water = water
        this.coffee = coffee
        this.milk = milk
        this.total = 0
    }

    get TotalCups(){

        return this.total
    }

    makeCupOfCoffee(){
        let isOk = true
        if(this.water < 100){
            isOk = false
            console.log(`Not enough water, you need ${100 - this.water} more grams`)
        }
        if(this.milk < 20){
            isOk = false
            console.log(`Not enough milk, you need ${20 - this.milk} more grams`)
        }
        if(this.coffee < 7){
            isOk = false
            console.log(`Not enough coffee, you need ${7 - this.coffee} more grams`)
        }

        if(isOk === false) return -1

        this.water -= 100
        this.coffee -= 7
        this.milk -= 20

        this.total += 1

        console.log(`Done ${this.TotalCups} cups of coffee`)
        
        return ('Coffee is ready')
    }
}

const coffee = new CoffeeMachine(150,21,30)

console.log(coffee.makeCupOfCoffee())
console.log(coffee.makeCupOfCoffee())
console.log(coffee.makeCupOfCoffee())