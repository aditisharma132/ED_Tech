class CPU {
    freeze() {
      console.log('Freezing CPU...');
    }
  
    jump(position) {
      console.log(`Jumping to position ${position}...`);
    }
  
    execute() {
      console.log('Executing commands...');
    }
  }
  
  class Memory {
    load(position, data) {
      console.log(`Loading ${data} into memory at position ${position}...`);
    }
  }
  
  class HardDrive {
    read(lba, size) {
      return `Reading ${size} bytes from LBA ${lba}`;
    }
  }
  
  // Facade
  class Computer {
    constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
    }
  
    start() {
      this.cpu.freeze();
      this.memory.load(0x00, this.hardDrive.read(0x00, 1024));
      this.cpu.jump(0x00);
      this.cpu.execute();
    }
  }
  
  // Usage
  const computer = new Computer();
  computer.start();
  