## AULA 01 - OBJETOS AVANÇADOS

* [Introducao](#intro)
* [Criar e modificar propriedades](#cria_modifica)
* Invocando métodos de obj
* Cuidado com os globais 
* Extraindo propriendades e valores
* Resumo da aula

<div id="intro">

# Introdução

## Revisão
<div id="intro">
* Matriz

Matriz é uma das estruturas de dados mais úteis em JS. A enssência, uma matriz é apenas um conjunto ordenado de elementos, envolvidos por um []. 

`const myarr = []`

Ou seja cada elemento esta referenciado por uma chave numerica chamada indice, inicia no zero e vai aumentando.

`const fruits = ['maca', 'banana', 'laranja']`

Para fazer a busca : <br>
`fruits[0]`

********
* Objeto

Uma das estruturas de dados mais importantes no JS. E um conjunto de chave valor associado. { }

`const myObj = {}`

As chaves de um obj deve ser nomeadas explicitamente como color ou year. 
Como no ex: <br>

`const car = {
    color: 'red',
    year: 1991,
    isPreOwnred: true
};`

`car[:color]`

Exemplo:
`const menu = {
    name : 'Salted Craramel Ice Cream',
    price : 2.95,
    ingredients : [
        'butter',
        'ice cream',
        'salt',
        'sugar'
    ]
}

console.log(menu.name)
console.log(menu.price)
console.log(menu.ingredients)
console.log(menu.ingredients.sort)
`

* Acessando propriendades do objeto

const bicycle = {
  color: 'blue',
  type: 'mountain bike',
  wheels: {
    diameter: 18,
    width: 8
  }
};

bicycle.color;

Acessar objetos aninhados, para obter o valor da propriedade width do objeto contido da propriedade `whees` de `bicycle`

Bicycle.wheels.width;
bicycle['wheels']['width'];

Outro caso podemos ter quando as variaves sao atribuidas a nomes de propriedades. 

const myVar = 'color'

`bicycle[myVar]` retorna `blue` pq a variavel `myVar`, troca o valor pelo valor da string. <br>
`bicycle['color']` = `blue` mas quando usamos `bicycle.myVar` = `undefined`

links:
* https://mathiasbynens.be/notes/javascript-properties

* https://mathiasbynens.be/notes/javascript-identifiers

* https://mathiasbynens.be/notes/javascript-identifiers-es6

*****************
<div id="cria_modifica">

## Criar e modificar propriedades 

# Criando Objetos
Criar um obj novo e vazio podemos usar a notação literal de obj. 
`Object()`

// usando notacao literal 
const myobj = {}

// usando a func contrutora obj
const myobj = new Object()

# Modificando propriedades
Todos os dados dentro de um obj na maioria das vezes são mutaveis.

const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};

cat.age += 1;

cat.age;
 
Agora o cat tem 3 anos!

# add propriedades

Para add as propriedades a obj s'ao simples especificando o nome da propriedade e dando a ela um valor. 

# Remover propriedades

Se os obj s'ao mutaveis podemos altetar e ate mesmo excluir. 
Para remover usamos a propriedade `delete`

`delete. printer.mode`

# Passando argumentos 

Parrando um primitivo : pode ser uma string, boleano... Ou seja toda mudanca feita em um argumento dentro de uma func. cria uma copia local a essa func e nao afeta o primitivo fora dessa func. 
`
function changeToEight(n) {
  n = 8; // não importa o que n era, agora é 8... mas só nesta function!
}
`
`
let n = 7;

changeToEight(n);

console.log(n);
// 7
`

# Passando um objeto 

Por outro lado podemos passar um obj em uma funcao, js passa uma referencia a esse obj. Vamos ver o que acontece um obj em uma func. e modificar uma propriedade. 

let originalObject = {
  favoriteColor: 'red'
};

function setToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// azul

Explicando : `originalObject` contém uma única propriedade, favoriteColor, que tem valor `'red'`. Passamos `originalObject` na função `setToBlue()` e a invocamos. Depois de acessar a propriedade `favoriteColor` de `originalObject`, vemos que o valor se tornou `'blue'`

Isso aconteceu pq no JS os obj sao passados por referencias, asism as mudancas estamos modificando o obj original diretamente. 
Essa mesma regra vale para quando reatribuimos um novo obj a uma nova variavel e mudamos essa copia. Repetindo como os obj soa passados por referencoa, ORIGINAL TBM E ALTERADO!

# Comparando OBJ

para comparar usamos `===` comparar propriedades

link
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete 



