
//funcao simples que registra somente uma sms
function sayHello() {
    console.log('Hi there!');
}

// criamos nosso developer com um nome
const developer = {
    name: 'Andrew'
};

// vamos atribuir nosso developer uma funcao , ou seja nome!!
developer.sayHello = function () {
    console.log('Hi there!');
};

console.log(developer['name'])

console.log(developer.sayHello())
console.log(developer['sayHello']())
console.log('------------------------------------')

// Passando argumentos em métodos

const dev = {
    name: 'Marcos',
    sayHello: function () {
        console.log('OI...')
    },
    favoriteLanguage: function (language) {
        console.log(`Minha linguagem favorita ${language} <3`)
    }
}

const deve = dev.favoriteLanguage('JavaScript')
console.log(deve)

console.log('------------------------------------')

const cat = {
    age: 2,
    name: 'bob',
    meow: function () {
        console.log('Meowww')
    },
    greet: function (person) {
        console.log(`Hellow ${person} !!`)
    }
}

console.log(cat.log)
console.log(cat.name)
console.log(cat.meow())
console.log(cat.greet())

console.log('------------------------------------')

// Cria uma expressao que invoque a func. referencia pela propriedade ring obj bell

const bell = {
    color: 'gold',
    ring: function () {
        console.log('Ring ring ....!!!')
    }
}

console.log(bell.ring())


console.log('------------------------------------')

//Um método pode acessar o objeto em que foi chamado

const triangle = {
    type: 'scalene',
    identify: function () {
        console.log(`This is a ${this.type} triangle.`);
    }
};

// invovando a funcao!!!
triangle.identify()

console.log('------------------------------------')

// ex dog

const dog = {
    name : 'snoop',
    age : 7,
    whatsIsThis : function(){
        console.log(this) // vai acessar todos os metodos
    },
    woof : function(){
        console.log(this.name + "says 'woof!!")
    },
    ageOneYear : function(){
        this.age += 1
        console.log('Idade do dog: '+this.age) // estou passando nova idade dog
    }
}

// primeiro metodo
dog.whatsIsThis()
// segundo metodo woof
dog.woof()
// terceiro medoto ageOne
dog.ageOneYear()

console.log('------------------------------------')

const tree = {
    type : 'redwood',
    leaves : 'green',
    height : 80,
    age : 15,
    growOneFoot : function(){
        this.height += 1 // add mais 1 na altura da arvore
        console.log(this.height)
    }
}
// invocando metodo arvore + 1
tree.growOneFoot()

console.log('------------------------------------')
const chameleon = {
    color : ['green','pink'],
    changeColor: function(){
        //this.color;
        console.log(this.color)
    }
}

console.log(chameleon.changeColor())