class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this._data = "Singleton Data";
      Singleton.instance = this;
      return this;
    }
  
    getData() {
      return this._data;
    }
  
    setData(data) {
      this._data = data;
    }
  }
  
  // Usage
  const singleton1 = new Singleton();
  const singleton2 = new Singleton();
  
  console.log(singleton1 === singleton2); // Output: true
  singleton1.setData("New Data");
  console.log(singleton2.getData()); // Output: New Data
  