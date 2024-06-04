class OldSystem {
    request() {
      return "Old system request";
    }
  }
  
  class NewSystem {
    specificRequest() {
      return "New system specific request";
    }
  }
  
  // Adapter
  class Adapter {
    constructor(newSystem) {
      this.newSystem = newSystem;
    }
  
    request() {
      return this.newSystem.specificRequest();
    }
  }
  
  // Usage
  const oldSystem = new OldSystem();
  console.log(oldSystem.request()); // Output: Old system request
  
  const newSystem = new NewSystem();
  const adapter = new Adapter(newSystem);
  console.log(adapter.request()); // Output: New system specific request
  