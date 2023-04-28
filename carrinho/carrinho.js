import {areia, pedra, gesso, drywall, vidro, cimento} from "../js/main.js";

var qtde_A = document.querySelector('#qtdeAreia');
qtde_A.addEventListener('input', function(){
    let valor = parseInt(qtde_A.value)
    return console.log(valor);
})

var qtde_P = document.querySelector('#qtdePedra');
qtde_P.addEventListener('input', function(){
    let valor = parseInt(qtde_P.value)
    return console.log(valor);
})

// function addAreia(){
//     let total = qtde_A.value * areia.preco

//     carrinho.push(total)

//     return console.log(carrinho[carrinho.length - 1])
// }

// function addPedra(){
//     let total = qtde_P.value * pedra.preco

//     carrinho.push(total)

//     return console.log(carrinho[carrinho.length - 1])
// }