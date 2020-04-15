function higherOrderFunction() {
    return function () {
      return 8;
    };
  }
  
console.log( higherOrderFunction()())

