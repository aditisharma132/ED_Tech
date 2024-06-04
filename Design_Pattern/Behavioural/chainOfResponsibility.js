class Logger {
    static INFO = 1;
    static DEBUG = 2;
    static ERROR = 3;
  
    constructor(level) {
      this.level = level;
      this.nextLogger = null;
    }
  
    setNextLogger(nextLogger) {
      this.nextLogger = nextLogger;
    }
  
    logMessage(level, message) {
      if (this.level <= level) {
        this.write(message);
      }
      if (this.nextLogger) {
        this.nextLogger.logMessage(level, message);
      }
    }
  
    write(message) {
      throw new Error("This method should be overridden!");
    }
  }
  
  class ConsoleLogger extends Logger {
    constructor(level) {
      super(level);
    }
  
    write(message) {
      console.log("Standard Console::Logger: " + message);
    }
  }
  
  class ErrorLogger extends Logger {
    constructor(level) {
      super(level);
    }
  
    write(message) {
      console.log("Error Console::Logger: " + message);
    }
  }
  
  class FileLogger extends Logger {
    constructor(level) {
      super(level);
    }
  
    write(message) {
      console.log("File::Logger: " + message);
    }
  }
  
  class LoggerChain {
    static getChainOfLoggers() {
      const errorLogger = new ErrorLogger(Logger.ERROR);
      const fileLogger = new FileLogger(Logger.DEBUG);
      const consoleLogger = new ConsoleLogger(Logger.INFO);
  
      errorLogger.setNextLogger(fileLogger);
      fileLogger.setNextLogger(consoleLogger);
  
      return errorLogger;
    }
  }
  
  // Usage
  const loggerChain = LoggerChain.getChainOfLoggers();
  
  loggerChain.logMessage(Logger.INFO, "This is an information.");
  loggerChain.logMessage(Logger.DEBUG, "This is a debug level information.");
  loggerChain.logMessage(Logger.ERROR, "This is an error information.");
  