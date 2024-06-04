class Car {
    constructor() {
      this.engine = null;
      this.color = null;
    }
  
    setEngine(engine) {
      this.engine = engine;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Car with ${this.engine} engine and ${this.color} color.`;
    }
  }
  
  class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setEngine(engine) {
      this.car.setEngine(engine);
      return this;
    }
  
    setColor(color) {
      this.car.setColor(color);
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  
  // Usage
  const car = new CarBuilder().setEngine("V8").setColor("red").build();
  console.log(car.toString()); // Output: Car with V8 engine and red color.
  