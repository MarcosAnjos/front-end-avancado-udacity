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


console.log('------------------------------')

// Fechamentos

// funcao que retorna valor passado

function remember(number){
    return function(){
        return number;
    }
}

const returnedFunc = remember(5)
// retorna 5
console.log( returnedFunc() )


console.log('------------------------------')
// Fechamento de escopo

// dica... sempre trabalhamos com elas mas não sabia... shuahsuha
// bora lá!

const myname = 'Marcos Alexandre'

function introduceMyself(){
    const you = 'student'

    function introduce(){
        console.log(`Hellow, ${you}, I am ${myname}`)
    }
    return introduce()
}

introduceMyself()
/*
    explicando
    myname é uma variavel fora da função = global.
    you é referenciando por introduce(), embora nao tenha sido declarado dentro de introduce()

    Possivel pq o escopo de uma função aninhada contém variaveis declaradas no escopo em que a 
    função foi aninhada.

    A função introduce() , em seu ambiente léxico formam um fechamento. Assim introduce() passa a ter aceeso não só a variavel
    global myname, mas tbm a you que foi declarada no escopo de sua função mae!
*/
