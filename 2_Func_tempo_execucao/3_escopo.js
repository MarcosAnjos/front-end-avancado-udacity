// escopo 

// cria uma var global
const myName = 'Marcos'

// cria uma func com uma var e uma funcao
function mySelf(){
    const you = 'student'

    function intro(){
        console.log(`Hellow, ${you}, I am ${myName}`)
    }
    return intro() // funcao retorna func. intro
}
// invoca a funcao!
mySelf()


console.log('------------------------------')
var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}
console.log(globalNumber)
console.log(globalIncrementer())
console.log(globalIncrementer())
console.log(globalIncrementer())
console.log(globalIncrementer())
console.log(globalNumber)
