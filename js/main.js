var areia = {
    id: document.querySelector("#areia"),
    nome: "Areia p/ construção",
    preco: 120.00,
    img: "img/servicos/areia.jpg"
}

var pedra = {
    id: document.querySelector("#pedra"),
    nome: "Pedra p/ construção",
    preco: 96.00,
    img: "img/servicos/pedra.png"
}

var gesso = {
    id: document.querySelector("#gesso"),
    nome: "Gesso p/ parede",
    preco: 90.00,
    img: "img/servicos/gesso.jpg"
}

var drywall = {
    id: document.querySelector("#drywall"),
    nome: "Drywall",
    preco: 30.00,
    img: "img/servicos/drywall.jpg"
}

var vidro = {
    id: document.querySelector("#vidro"),
    nome: "Vidro",
    preco: 350.00,
    img: "img/servicos/vidro.jpg"
}

var cimento = {
    id: document.querySelector("#cimento"),
    nome: "Cimento 25kg",
    preco: 57.90,
    img: "img/servicos/cimento.jpg"
}

infoCardAreia()
infoCardPedra()
infoCardGesso()
infoCardDrywall()
infoCardVidro()
infoCardCimento()

function infoCardAreia(){
    areia.id.innerHTML = areia.nome;
    var preco_areia = document.querySelector("#preco-a")
    preco_areia.innerHTML = "<span>R$" + areia.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-a").src = areia.img
}

function infoCardPedra(){
    pedra.id.innerHTML = pedra.nome;
    var preco_pedra = document.querySelector("#preco-p")
    preco_pedra.innerHTML = "<span>R$" + pedra.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-p").src = pedra.img
}

function infoCardGesso(){
    gesso.id.innerHTML = gesso.nome;
    var preco_gesso = document.querySelector("#preco-g")
    preco_gesso.innerHTML = "<span>R$" + gesso.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-g").src = gesso.img
}

function infoCardDrywall(){
    drywall.id.innerHTML = drywall.nome;
    var preco_drywall = document.querySelector("#preco-d")
    preco_drywall.innerHTML = "<span>R$" + drywall.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-d").src = drywall.img
}

function infoCardVidro(){
    vidro.id.innerHTML = vidro.nome;
    var preco_vidro = document.querySelector("#preco-v")
    preco_vidro.innerHTML = "<span>R$" + vidro.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-v").src = vidro.img
}

function infoCardCimento(){
    cimento.id.innerHTML = cimento.nome;
    var preco_cimento = document.querySelector("#preco-c")
    preco_cimento.innerHTML = "<span>R$" + cimento.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-c").src = cimento.img
}

const carrinho = []

function addAreia(){
    if(!carrinho.includes(areia)){
        carrinho.push(areia);
    } else{
        let txt_retorno = document.querySelector("#txt-retorno-a");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";
        
        do{
            var c = 0

            setTimeout( () => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while(c == 0)
    }
}

function addPedra(){
    if(!carrinho.includes(pedra)){
        carrinho.push(pedra);
    } else{
        let txt_retorno = document.querySelector("#txt-retorno-p");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";
        
        do{
            var c = 0

            setTimeout( () => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while(c == 0)
    }
}

function addGesso(){
    if(!carrinho.includes(gesso)){
        carrinho.push(gesso);
    } else{
        let txt_retorno = document.querySelector("#txt-retorno-g");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";
        
        do{
            var c = 0

            setTimeout( () => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while(c == 0)
    }
}

function addDrywall(){
    if(!carrinho.includes(drywall)){
        carrinho.push(drywall);
    } else{
        let txt_retorno = document.querySelector("#txt-retorno-d");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";
        
        do{
            var c = 0

            setTimeout( () => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while(c == 0)
    }
}

function addVidro(){
    if(!carrinho.includes(vidro)){
        carrinho.push(vidro);
    } else{
        let txt_retorno = document.querySelector("#txt-retorno-v");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";
        
        do{
            var c = 0

            setTimeout( () => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while(c == 0)
    }
}

function addCimento(){
    if(!carrinho.includes(cimento)){
        carrinho.push(cimento);
    } else{
        let txt_retorno = document.querySelector("#txt-retorno-c");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";
        
        do{
            var c = 0

            setTimeout( () => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while(c == 0)
    }
}

function mostraQtdeCarrinho(){
    let valor_carrinho = document.querySelector('#valor-carrinho');

    if(carrinho.length === 0 || carrinho.length === undefined){
        valor_carrinho.innerHTML = "<p>0</p>"
    } else {
        valor_carrinho.innerHTML = "<p>" + carrinho.length + "</p>"
    }
}

function itensCarrinho(){
    let itens = document.querySelector("#itens")
    itens.innerHTML = ""

    if(carrinho.length != 0){
        for (let i = 0; i < carrinho.length; i++) {
            var produto = carrinho[i];
            var imagem = document.createElement("img");
            var txt_produto = document.createElement("p");
            var div_conteudo = document.createElement("div");
            var hr = document.createElement("hr");
            
            div_conteudo.classList.add("item-container")
            txt_produto.textContent = produto.nome + " - R$" + produto.preco.toFixed(2);
            imagem.setAttribute("src", `${"../" + produto.img}`);
            imagem.setAttribute("alt", "Falha ao carregar a imagem");

            itens.appendChild(div_conteudo);
            itens.appendChild(hr);
            div_conteudo.appendChild(imagem);
            div_conteudo.appendChild(txt_produto);
        }
    } else{
        itens.innerHTML = "<p style='text-align: center; margin: 0'>Seu carrinho está vazio! 😭</p>"
    }
}

// function getPValue() {
//     let qtde_P = document.querySelector('#qtdePedra');

//     qtde_P.addEventListener('input', function(){
//         let valor_P = parseInt(qtde_P.value)

//         return valor_P
//     })
// }


// cods carrinho.js

// var qtde_A = document.querySelector('#qtdeAreia');
// qtde_A.addEventListener('input', function(){
//     let valor = parseInt(qtde_A.value)
//     return console.log(valor);
// })

// var qtde_P = document.querySelector('#qtdePedra');
// qtde_P.addEventListener('input', function(){
//     let valor = parseInt(qtde_P.value)
//     return console.log(valor);
// })

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