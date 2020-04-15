// recuperar uma refefencia a esse elemento pelo ID e salvar no button
const button = document.getElementById('button')

// vamos add evento para ouvir click!
// depois deixar como IIFE 
button.addEventListener('click', (function(){
    let count = 0

    return function() {
        count += 1

        if(count === 2){
            alert(`Esse alerta aparece a cada 2 click!!!`)
            count = 0
        }
    }
})())
