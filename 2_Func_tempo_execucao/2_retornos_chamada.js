
// funcao que recebe um numero e outra funcao
function callAndAdd(n, callbackFunction){ 
    return n + callbackFunction() // me retorna uma numero
            // 2 + funcao returnsTheree()
                    // + 3
            // 2 + 3 = 5
}

// outra funcao anonima que retona um numero
function returnsTheree(){
    return 3
}

// invocando a funcao
console.log(callAndAdd(2,returnsTheree))

console.log("--------------------------------")
// forEach()

// uma funcao pega um numero informa se impar no console

function logIfOdd(n){
    if(n % 2 !== 0){
        console.log(n)
    }
}

console.log("IMPAR")
logIfOdd(2) // eh par
logIfOdd(3) // eh impar
logIfOdd(9) // eh impar

console.log("--------------------------------")
// passando um array para minha funcao interar!
const favorite = ['cookie dough', 'salted caramel', 'toffee']

favorite.forEach(function (sabor){
    console.log(`I enjoy ${sabor} ice cream`)
})

console.log("--------------------------------")

// map()

const names = ['andrew', 'richard', 'veronika']

const nameLenghts = names.map(function(name){   // map() na matriz names como passar uma funcao anonima como argumento
    return name.length
})
console.log("--------------------------------")

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const objMusic = musicData.map( obj => obj.artist + ' by ' + obj.name + ' sold ' + obj.sales )

console.log(objMusic)

console.log("--------------------------------")

// filter()
// usando array names 

const shortNames = names.filter(function(name){
    return name.length < 6  
})


console.log(shortNames)

// mesma logica podemos filtar do musicData (obj)


// filtragem no meus albuns retorna somete albuns com nome > 10 e < 25
const resultFilter = musicData.filter(album => album.name.length >= 10 && album.name.length <= 25)

console.log(resultFilter)