class Memento {
    constructor(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  }
  
  class Originator {
    constructor() {
      this.state = "";
    }
  
    setState(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  
    saveStateToMemento() {
      return new Memento(this.state);
    }
  
    getStateFromMemento(memento) {
      this.state = memento.getState();
    }
  }
  
  class Caretaker {
    constructor() {
      this.mementoList = [];
    }
  
    add(state) {
      this.mementoList.push(state);
    }
  
    get(index) {
      return this.mementoList[index];
    }
  }
  
  // Usage
  const originator = new Originator();
  const caretaker = new Caretaker();
  
  originator.setState("State #1");
  originator.setState("State #2");
  caretaker.add(originator.saveStateToMemento());
  
  originator.setState("State #3");
  caretaker.add(originator.saveStateToMemento());
  
  originator.setState("State #4");
  
  console.log("Current State: " + originator.getState());
  originator.getStateFromMemento(caretaker.get(0));
  console.log("First saved State: " + originator.getState());
  originator.getStateFromMemento(caretaker.get(1));
  console.log("Second saved State: " + originator.getState());
  