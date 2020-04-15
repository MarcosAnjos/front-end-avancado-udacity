## AULA 01 - OBJETOS AVANÇADOS

* [Introducao](#intro)
* [Criar e modificar propriedades](#cria_modifica)
* [Invocando métodos de obj](#invocando_metodos)
* [Cuidado com os globais](#cuidado_con_globais) 
* [Extraindo propriendades e valores](#extraindo-propriedades-valores)
* [links](#links)

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

*************
<div id="invocando_metodos">
# Invocando Metodos 

## Função X Métodos

Os obj com propriedades que se comportam mais como atributos. Ou sejam, propriedades como `color` ou `type` são  dados que descrevem um objeto, mas não fazem nada. Podemos levar a funcionalidade aos obj add metodos a eles. 

Digamos que voce tenha uma função `sayHellow()` que simplesmente registra uma mensagem

`
function sayHellow (){
  console.log('hi there');
}
`

Para add uma obj `developer` com uma unica propriedade `name`.

`
const developer = {
  name = 'andrew`
}
`

Agora para add uma func. sayHello() ao obj.
`
developer.sayHello = function (){
  console.log('hi there')
}
`

E o nosso obj developer atualizado fica assim:

` const developer = {
    name: 'andrew`, 
    sayHello : function(){
      console.log('hi there')
    }
}
`
## Chamando metodos

Para acessar metodos de uma funcao facil, podemos passar obj usando o nome da propriedade. As propriedade de funcao de um obj sao chamado de metodo. 

`developer.sayHello()`

## Passando argumentos em métodos

Se o método aceita argumentos, podemos passar metodos!

## Um método pode acessar o objeto em que foi chamando

Um obj pode conter dados e a forma de manipular esses dados. Para referenciar as proprias propriedades do obj, e manipular algumas dessas propriedades. 
Se torna possivel pelo THIS 

Usando This podemos acessar diretamente um obj em que sao chamandos. 

`
const triangle = {
  type : 'scalene', 
  identify : function(){
    console.log(`this is a ${this.type} triangle`)
  }
}
`
Quando usando o this para acessar o obj. E o metodo de acesso direto as propriedades do obj triangle

`triangle.idetify()`

Quando esse metodo identify(), é chamado o valor this é definido como o obj em que foi chamando, que é tringle. Com isso, o metodo identify(), pode acessar e usar a propriedade type de triagule,

links 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_methods

* https://javascript.info/object-methods#this-in-methods


************
<div id="cuidado_con_globais">

# Cuidado com os globais

## Os perterces dos objetos

const chameleon = {
  eyes: 2,
  lookAround: function () {
     console.log(`Vejo você com os meus ${this.eyes} olhos!`);
  }
};

chameleon.lookAround();
// 'Vejo você com os meus 2 olhos!'

lookAround: function () {
  console.log(`Vejo você com os meus ${this.eyes} olhos!`);
}

Dentro do corpo da função, temos o código this.eyes. Como o método lookAround() foi chamado no objeto chameleon como chameleon.lookAround(), o valor de this é o próprio objeto chameleon! Por isso, this.eyes é o número 2, já que referencia a propriedade eyes do objeto chameleon.

## This e invocacao de funcao

Usando a mesma funcao acima chameleon

function whoThis (){
  this.trickysh = true
}

chameleon.lookAround()

whoThis()

## Comparar as estrutura d func./metodo

THIS E INVOCAÇÃO 

COMO A FUNCAO É INVOCADA DETERMINADA O VALOR DE 'THIS' DENTRO DA FUNÇÃO

Como .lookAround() é invocado como método, o valor de this dentro de .lookAround() é tudo que estpa a esquerda do ponto na invocação. 

`chameleon.lookAround()`

O metodo `chameleon` esta na esquerda do ponto. Portanto, dentro do método  .lookAround() e this vai referenciar o obj chameleon

Bom agora podemos nos perguntar com a funcao whothis()
pois como ela representa uma func. simples, não tem como método em um obj. 

`whoThis()`

Nesse ponto nao existe.. nada a esquerda do ponto. Como não tem nada a esquerda, no JS ele tem um ponto de curiosidade. QUANDO UMA FUNÇÃO COMUM É INVOCADA, O VALOR DE THIS É O GLOBAL. 

## lembrete

O objeto window é fornecido pelo navegador e não faz parte da linguagem nem da especificação JavaScript. Toda declaração de variável global (ou seja, as que usam var) ou de função global são adicionadas como propriedades a esse objeto window. O uso excessivo de variáveis globais não é uma boa prática e pode causar problemas inesperados a um código perfeitamente escrito.

Independentemente de você trabalhar com o objeto window ou com outro criado por você, lembre-se de que os objetos são compostos de pares de chave/valor. Na próxima seção, vamos ver como extrair essas chaves ou valores individuais!

links
* https://developer.mozilla.org/en-US/docs/Web/API/Window
* https://html.spec.whatwg.org/multipage/window-object.html#the-window-object
* http://wiki.c2.com/?GlobalVariablesAreBad
* https://en.wikipedia.org/wiki/Coupling_(computer_programming


*****************
<div id="extraindo-propriedades-valores">

# Extraindo propriedades e valores

## Métodos de objeto

Quando usando func contrutora `Object()` antes de criar ou insranciar, novos objs com a palavra-chave new

`const myNewFrancyObj = new Object()`

A func Object() tem alguns metodos add proprios para ajudar :

Object.keys() Object.values()

# Object.keys() e Object.values()

Em essencia, um objeto é apenas um conjunto de pares de chave/valor. E se quiséssemos extrair apenas as chaves de um obj. 

const dictionary = {
  car: 'automóvel',
  apple: 'alimento saudável',
  cat: 'animal peludo fofinho',
  dog: 'melhor amigo'
};

Podemos usar Object.keys(), fornecendo a um objeto, ele extrai apenas as chaves objeto e as retorna em uma matriz

Object.keys(dictionary);

// [car, apple, 'cat', 'dog']

O Object.values() se quiser uma lista dos valores de um objeto, podemos usar Object.values()

Object.values(dictionary)

// ['automóvel', 'alimento saudável', 'animal peludo fofinho', 'melhor amigo']


const triangle = {
  type: 'polygon',
  sides: 3,
  sumOfAngles: 180,
  equilateral: true,
  equiangular: true
};

Object.keys(triangle )

A função construtora Object() tem acesso a diversos métodos para auxiliar no desenvolvimento. Resumindo:

object.keys() retorna uma matriz das chaves (nome das propriedades) de determinado objeto. Object.values() retorna uma matriz dos valores (valor das propriedades) de determinado objeto.

links

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values


************
<div id="links">

Links 

* http://crockford.com/javascript/
* https://www.goodreads.com/book/show/2998152-javascript

************