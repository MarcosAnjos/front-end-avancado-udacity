Aula 02

[Introducao](#intro)
[Funcão de chamada](#func_chamada)
[Retornos de chamada](#retorno_chamada)
[Escopo](#escopo)
[Fechamentos](#fechamantos)
[Expressão de função invocação](#expressao_func)

<div id="intro">

As funçãoe são uma das estruturas de dados mais importantes...

*****
<div id="func_chamada">


# Função de chamada 

## Função são funções de primeira classe 
Em JS, funções de primeira classe. São como obj, voce pode fazer com funções extamente tudo que pode fazer com outros elementos, com numeros, strings, matrizes... As funções JS podem 
1 - ser armazenadas em variaves 
2 - ser retornadas de uma função
3 - ser passadas como argumento em outra função


# Funçoes que podem retornar funções

Temos uma função de ordem superior

function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}

Para invocar a segunda func.

const innerF = alertThenReturn()

Agora podemos chamar a função

innerF()

Seguindo a mesma logica podemos ser invocada indiretamente, sem criar variaveis. Recebento o mesmo resultado se simplismente add outro conjunto de parentesis a alertThenReturn()

alertThenReturn()()

Com dois ()() na chamada da func. O primiro () chama msg1 e ()() chama em seguida.. msg2


link

* https://en.wikipedia.org/wiki/First-class_function

*************
<div id="retorno_chamada">

# Retorno de chamada

## Funções de retorno de chamada

Como funções de JS são funções de primeira classe. Podemos add outros valores inclusive passar outras função. 
Uma função que assume outras como argumentos ( retorna uma função ) é uma função de ordem superior. 
Uma função passada como um argumento em outra função é chamada de função de retorno de chamada ou callback

# Métodos array

## forEach()

o método forEach() da matriz pega uma função de retorno de chamada e invoca essa função para cada elemento da matriz. Ele permite interar (loop) uma matriz, o que parece com loop do for

array.forEach(function callback(currentValue, index, array) {
    // o código da função vem aqui
});

A função de retorno recebe os argumentos: o elemento atual da matriz, seu indice e toda a matriz

## map()

O map() é similar a forEchah() pelo fato de invocar uma função de retorno de chamada para cada elemento de uma matriz.
Logo map() ele retorna uma nova matriz com base que retornou da função de retorno da chamada

const names = ['Andrew', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
  return name.length;
});

O map() faz a chamada oara cada item da matriz names! A função recebe o primeiro nome da matriz, armazena na variavel name e retorna seu tamanho. 

****
### Diferença do forEach() e map()
    O forEach() não retorna nada, enquanto que o map() retorna uma nava matriz com os valores que foram retornados da função!
    Logo a new matriz ser [6,7,8]
#### map() retorna uma nova matriz, não modifica a matriz original

****

## filter()
O método filter() de array é parecido com o método map() que é chamado em uma matriz. Assume uma função como argumento e retorna uma nova matriz.
A diferença é que a função passada a filter() é usada como teste, e somente itens da matriz que passam no teste são incluidos na nova matriz. 

const names = ['Andrew', 'Richard', 'Veronika'];

const shortNames = names.filter(function(name) {
  return name.length < 6;
});


No filter() assim como acontece no map() retorna uma nova matriz, mas nao modifica a original.



