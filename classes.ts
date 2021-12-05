class Vehicle{
    color: string;
    constructor(color: string){
        this.color = color;
    }
   private drive(): void {
       console.log('test');
   }

   startDriving(): void {
       this.drive();
   }
};

class Car extends Vehicle {

}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
vehicle.startDriving();