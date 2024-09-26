

class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("Vehicle is moving");
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketsPrice){
        super(name, price);
        this.seat = seat;
        this.ticketsPrice = ticketsPrice;
    }

}

class Truck extends Vehicle {
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}