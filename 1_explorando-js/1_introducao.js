const bicycle = {
    color : 'blue', 
    type : 'mountain bike',
    wheels: {
        diameter : 18,
        width : 8
    }
};

console.log("Cor da bike")
console.log(bicycle.color)
console.log(bicycle['color'])

console.log("Valor de width")
console.log(bicycle.wheels.width)
console.log(bicycle['wheels']['width'])
console.log(bicycle['wheels'])

const myVar = 'color'

console.log("Retorno bicycle[myVar]")
console.log(bicycle[myVar])

console.log("Retorno bicycle.myVar")
console.log(bicycle.myVar)

console.log("---------------------------------")

const mileTimes = [7.50, 6.25, 10.60, 8.88];
console.log("Ultimo valor mileTime")
console.log(mileTimes)
console.log(mileTimes[3])
console.log("---------------------------------")

const populations = {
    china: 1379000000,
    brazil: 207700000,
    india: 1324000000,
    unitedStates: 323100000
  };

console.log("Qual a populacao do Brasil")
console.log(populations.brazil)

console.log("---------------------------------")

const greetings = {
    hello: [{
      english: 'hi',
      french: 'bonjour',
      portuguese: 'oi'
    }],
    goodbye: [{
      english: 'bye',
      french: 'au revoir',
      portuguese: 'tchau'
    }]
  };
  
  console.log("Escreva expressao e retorna OI")
  console.log(greetings['hello'][0].portuguese)