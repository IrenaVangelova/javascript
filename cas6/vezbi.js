class Car {
    constructor(model,color,length,year,maxSpeed,currentSpeed) {
        this.model = model
        this.color = color
        this.length = length
        this.year - year
        this.maxSpeed = maxSpeed
        this.currentSpeed = currentSpeed
    }

    goFaster(acceleration) {
        this.currentSpeed += acceleration
        if(this.maxSpeed <= this.currentSpeed) {
            console.log('YOu have reached the maximum speed limit')
            this.goSlower(this.currentSpeed)
        }
        else
            console.log(`Acceleration by ${acceleration} km/h`)
    }

    goSlower(decceleration) {
        this.currentSpeed -= decceleration
        if(this.currentSpeed <= 0) {
            console.log('Car is stopping')
        }
        else 
            console.log(`Slowing down by ${decceleration} km/h`)
    }

}

const Jeep = new Car (
    'Jeep',
    'white',
    5,
    2010,
    200,
    50
)

console.log(Jeep)

Jeep.goFaster(50)
Jeep.goFaster(50)
Jeep.goFaster(50)
Jeep.goFaster(50)

while(Jeep.currentSpeed > 0) {
    Jeep.goFaster(50)
}

class SportsCar extends Car{
    constructor(model,color,length,year,maxSpeed,currentSpeed,rimSize,numExhaust) {
        super(model,color,length,year,maxSpeed,currentSpeed)
        this.numExhaust = numExhaust
        this.rimSize = rimSize
    }
}

const McLaren = new SportsCar (
    'McLaren',
    'blue',
    5,
    2015,
    300,
    50,
    15,
    2
)

// console.log(McLaren)

// McLaren.goFaster(50)

while(McLaren.currentSpeed > 0) {
    McLaren.goFaster(50)
}