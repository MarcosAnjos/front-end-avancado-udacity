// usando notacao literal 
//const myobj = {}

// usando a func contrutora obj
//const myobj = new Object()

// modificadores propriedades
const cat = {
    age : 2, 
    name : 'bob', 
    meow : function(){
        console.log('Meowww!')
    },
    greet : function(name){
        console.log(`Hello ${name}`)
    }
}

console.log("Aumentando a idade")
console.log(cat.age += 1)

console.log("trocando nome")
console.log(cat.name = 'Thozen')

//add  uma cor ao gato
cat.color = 'gray'
console.log(cat['color'])

// add funcao name no gato
cat.name = function(){
    console.log(cat.name)
}

console.log(cat)

console.log("--------------------")
// add propriedades 

const priter = {

}

priter.on = true
priter.mode = 'black and white'

// posso add desta forma tbm!
console.log("Add remainigSheets")
console.log(priter['remainigSheets'] = 168)

console.log("Como esta priter")
console.log(priter)

// posso add um metodo ao obj 
priter.print = function() {
    console.log('The printer os printing')
}

console.log(priter.print())

// para excluir propriedades

delete priter.mode

console.log("Apos excluir - mode")
console.log(priter)


delete priter.print

console.log("Apos excluir - print")
console.log(priter)

console.log("--------------------")

let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
  };

console.log(house);

console.log("Expressao excluir propriedade numwindows");

delete house.numWindows;

console.log(house);


console.log("--------------------")

// add uma nova propriedade HOUSE  
// hasGarage = true

house['hasGarage'] = true

console.log("Add Garagem a house")
console.log(house.hasGarage)

console.log("--------------------")

// Passando argumentos

// Passando um OBJ

let originalObject = {
    favoriteColor: 'red'
  };
  
  function setToBlue(object) {
    object.favoriteColor = 'blue';
  }
  
console.log(setToBlue(originalObject))
// undefind
  
console.log( originalObject.favoriteColor)
  // azul

  // outro exemplo
  const iceCreamOriginal = {
    Andrew: 3,
    Richard: 15
  };

  // add uma nova variavel a iceCreamOriginal
  // depois chegar o valor richard

  const iceCreamCopy = iceCreamOriginal

  console.log("sorvete original")
  console.log(iceCreamOriginal)
  console.log("sorvete copy")
  console.log(iceCreamCopy)

  console.log("Richard")
  console.log(iceCreamCopy.Richard)

  // add 99 para richard
  iceCreamCopy.Richard = 99
  console.log("Add 99 Richard")
  console.log(iceCreamCopy.Richard)
  console.log("sorvete original - richard")
  console.log(iceCreamOriginal.Richard)

  // Origial e copy foram alterados...

  
console.log("--------------------")

const parrot = {
    group : 'bird', 
    feathers : true, 
    chirp : function() {
        console.log('Chirp chirp')
    }
}

const pigeon = {
    group: 'bird', 
    feathers: true, 
    chirp: function () {
        console.log('Chirp chirp')
    }
}

// comparando parront e pigeon

console.log("Comparando parront e pigeon")
console.log(parrot === pigeon)

// Esta retornando false. Para ser treu as duas referencias tem ser mesmo obj

const mybird = parrot

console.log(mybird === parrot)

// true pois mesmo obj


console.log("--------------------")

let string = 'orange'

function changeToApple(string){
    string = 'apple'
}

changeToApple(string)
// maca ou orange minha saida
console.log(string)

console.log("--------------------")

const oven = {
    type : 'clay',
    temperature: 400
}

// qual valor temperature de oven

const newOven = oven

let result = newOven.temperature += 50

console.log(result)
