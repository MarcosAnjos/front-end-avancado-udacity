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

*********
<div id="escopo">

# Escopo

Escopo determina onde uma variavel pode ser vista em um código. Galera da computação gosta de chamar de ESCOPO LÉXICO

Mas tem outro tipo de escokpo chamado escopo de tempo de execução. Quando uma função é execultada, cria um novo escopo de tempo de execução. Esse escopo representa o contexto da função, ou mais especificamente, o conjunto de variaveis diskponivel para a função usar. 

Logo o escopo tem uma função que descreve as variaveis diponivel para uso dentro tal função. 

1 - Os argumentos da função
2 - Variaveis locais declaradas dentro da funçao
3 - Variaveis do escopo de sua função-mae
4 - Variaveis globais.



Ordem que interpretador JS realiza a busca

1 - variaveis locais
2 - variaveis de funcao pais
3 - variaveis de funcao pais de funcao pais
4 - variaveis globais


links
* https://www.udacity.com/course/es6-javascript-improved--ud356

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

* https://www.youtube.com/watch?v=Ji6NHEnNHcA&t=26m9s

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

*******
<div id="fechamantos">

# Fechamentos

## Funções mantêm seu escopo 

Processo de uma funcao reter acesso ao escopo é chamando de fechamento ou closure. 

****
A combinação entre função e o ambiente léxico em que essa função foi declarada. 
****

Ou seja, faz referencia como o codigo foi escrito no arquivo JS. 
A propria função o codigo( mas, mais importante, a cadeia de escopos de) em que a função foi declarara.

## Criando um fechamento

Sempre que uma função é definida, é criado um fechamento para ela. Ou seja, todas as funções têm fechamento!! 
Isso acontece pq as funções focam em pelo menos um outro contexto na cadeia de escopos: o escopo global. Este recurso dos fechamanetoss fazem a diferença quando trabalhamos com uma função aninhada -uma função definida dentro de outra função!

Mas função aninhada tem aceso a variaveis externas a ela. Na cadeia de escopos, isso encolve as variaveis da própria função de fechamanto externo!
Estas funçoes aninhadas capturam variaveis que não foram passadas como argumentos nem definidas localmente, também conhecidas como variaveis livres. 

Notamos que as função matêmn uma refência ao escopo da sua função mãe. Enquanto a referencia á função pode ser acessada, o escopo persiste!

## Coleta de lixo

No JS gerecia a memória como a coleta de lixo automática. Assim quando os dados não são mais referenciaveis - eles sao coletados como lixo e serão destruidos em algum momento. Assim os recursos que os dados consumiam são liberados -  mémoria do PC

Podemos analisar a coleta de lixo no contexto dos fechamentos. Sabemos que uma função interna aninhada pode acessar as variaveis de função-mae. Se a função aninhada captura e usa variaveis da sua função mãe -  ou variaveis da cadeia de escopos, como as da superior a função mae. Ficaram na memória pelo tempo que as função que as ultilizam continuarem sendo referenciadas.

Logo no JS, variaveis referenciadas não passam pela colera de lixo.

## Resumo
Um fechamento é a combinação entre função e o ambiente léxico em que essa função foi declarada. Sempre que uma função é definida, é criado um fechamento para ela. Isso é especialmente eficaz em situações em que uma função é definida dentro de outra função, permitindo que a função aninhada acesse variáveis fora dela. As funções também mantêm um vínculo com o escopo da função-mãe, mesmo que a mãe tenha retornado. Isso impede que os dados nas funções-mãe passem pela coleta de lixo.

links 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

* http://es5.github.io/#x10.2

