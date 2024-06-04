class Subject {
    constructor() {
      this.observers = [];
      this.state = null;
    }
  
    getState() {
      return this.state;
    }
  
    setState(state) {
      this.state = state;
      this.notifyAllObservers();
    }
  
    attach(observer) {
      this.observers.push(observer);
    }
  
    notifyAllObservers() {
      this.observers.forEach((observer) => observer.update());
    }
  }
  
  class Observer {
    constructor(name, subject) {
      this.name = name;
      this.subject = subject;
      this.subject.attach(this);
    }
  
    update() {
      console.log(`${this.name} updated with state: ${this.subject.getState()}`);
    }
  }
  
  // Usage
  const subject = new Subject();
  
  const observer1 = new Observer("Observer 1", subject);
  const observer2 = new Observer("Observer 2", subject);
  
  subject.setState("State #1");
  subject.setState("State #2");
  