const chameleon = {
    eyes: 2,
    lookAround: function () {
       console.log(`Vejo você com os meus ${this.eyes} olhos!`);
    }
  };
  
  function whoThis () {
    this.trickyish = true
  }
  
  chameleon.lookAround();
  
  whoThis();

console.log("------------------")

const car = {
    numberOfDoors: 4,
    drive: function () {
        debugger
       console.log(`Entre em uma das ${this.numberOfDoors} portas, e vamos embora!`);
    }
  };
  
car.drive();




