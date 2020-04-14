## AULA 01 - OBJETOS AVANÇADOS

* Introducao(#intro)
* Criar e modificar propriedades
* Invocando métodos de obj
* Cuidado com os globais 
* Extraindo propriendades e valores
* Resumo da aula

<div id="intro">

# Introdução

## Revisão

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