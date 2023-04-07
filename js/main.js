var areia = {
    id: document.querySelector("#areia"),
    nome: "Areia p/ construção",
    preco: 120.00,
    img: "../img/servicos/areia.jpg",
    qtde: ""
}

var pedra = {
    id: document.querySelector("#pedra"),
    nome: "Pedra p/ construção",
    preco: 96.00,
    img: "../img/servicos/pedra.png"
}

var gesso = {
    id: document.querySelector("#gesso"),
    nome: "Gesso p/ parede",
    preco: 90.00,
    img: "../img/servicos/gesso.jpg"
}

var drywall = {
    id: document.querySelector("#drywall"),
    nome: "Drywall",
    preco: 30.00,
    img: "../img/servicos/drywall.jpg"
}

var vidro = {
    id: document.querySelector("#vidro"),
    nome: "Vidro",
    preco: 350.00,
    img: "../img/servicos/vidro.jpg"
}

var cimento = {
    id: document.querySelector("#cimento"),
    nome: "Cimento 25kg",
    preco: 57.90,
    img: "../img/servicos/cimento.jpg"
}

var produtos = [
    areia, pedra, gesso, drywall, vidro, cimento
]



var carrinho = []

function addAreia(){
    let qtde_A = document.querySelector('#qtdeAreia');

    qtde_A.addEventListener('input', function(){
        let valor = parseInt(qtde_A.value)

        let total = valor * areia.preco

        return carrinho.push(total)
    })

    console.log(carrinho[carrinho.length - 1])
}

function addPedra(){
    let qtde_P = document.querySelector('#qtdePedra');

    qtde_P.addEventListener('input', function(){
        let valor = parseInt(qtde_P.value)

        let total = valor * areia.preco

        return carrinho.push(total)
    })

    console.log(carrinho[carrinho.length - 1])
}

function getPValue() {
    let qtde_P = document.querySelector('#qtdePedra');

    qtde_P.addEventListener('input', function(){
        let valor_P = parseInt(qtde_P.value)

        return valor_P
    })
}

function getGValue() {
    let qtde_G = document.querySelector('#qtdeGesso');

    qtde_G.addEventListener('input', function(){
        let valor_G = parseInt(qtde_G.value)

        return valor_G
    })
}

function getDValue() {
    let qtde_D = document.querySelector('#qtdeDrywall');

    qtde_D.addEventListener('input', function(){
        let valor_D = parseInt(qtde_D.value)

        return valor_D
    })
}

function getVValue() {
    let qtde_V = document.querySelector('#qtdeVidro');

    qtde_V.addEventListener('input', function(){
        let valor_V = parseInt(qtde_V.value)

        return valor_V
    })
}

function getCValue() {
    let qtde_C = document.querySelector('#qtdeCimento');

    qtde_C.addEventListener('input', function(){
        let valor_C = parseInt(qtde_C.value)

        return valor_C
    })
}