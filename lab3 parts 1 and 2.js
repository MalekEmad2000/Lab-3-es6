//part 1 lab 3

let food=["Burger","Pizza","Donuts","koshary","Donuts","Seafood","Burger"];

let foodSet= new Set(food);

foodSet.add("Pasta");
console.log(foodSet);

foodSet.delete("Burger");
console.log(foodSet);

const remove=(set)=>{
 
    if(set.size>2){
        set.clear();
    }
}

remove(foodSet);
console.log(foodSet);

//part 2 lab3
class Vehicle {
    constructor(wheels,speed){
      this.wheels=wheels;
      this.speed=speed;
    }
}

class Bike extends Vehicle{
    

  static Count = 0;

   constructor(){
     super(2,"fast enough");
     Bike.add();
   }

   static add(){
    Bike.Count++;
    console.log("instances created is "+this.Count);
   }
}

let bike1= new Bike();
let bike2= new Bike();
let bike3= new Bike();
let bike4= new Bike();