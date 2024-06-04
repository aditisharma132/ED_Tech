class Dog {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat {
    speak() {
      return "Meow!";
    }
  }
  
  class AnimalFactory {
    static createAnimal(animalType) {
      if (animalType === "dog") {
        return new Dog();
      } else if (animalType === "cat") {
        return new Cat();
      } else {
        return null;
      }
    }
  }
  
  // Usage
  const dog = AnimalFactory.createAnimal("dog");
  console.log(dog.speak()); // Output: Woof!
  
  const cat = AnimalFactory.createAnimal("cat");
  console.log(cat.speak()); // Output: Meow!
  