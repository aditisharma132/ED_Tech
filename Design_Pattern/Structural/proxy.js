class RealSubject {
    request() {
      return 'RealSubject: Handling request.';
    }
  }
  
  class Proxy {
    constructor(realSubject) {
      this.realSubject = realSubject;
    }
  
    request() {
      if (this.checkAccess()) {
        const result = this.realSubject.request();
        this.logAccess();
        return result;
      } else {
        return 'Proxy: Access denied.';
      }
    }
  
    checkAccess() {
      // Check if the access is allowed
      console.log('Proxy: Checking access prior to firing a request.');
      return true;
    }
  
    logAccess() {
      console.log('Proxy: Logging the time of request.');
    }
  }
  
  // Usage
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);
  console.log(proxy.request());
  