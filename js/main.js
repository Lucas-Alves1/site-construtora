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

function infoCardAreia() {
    areia.id.innerHTML = areia.nome;
    var preco_areia = document.querySelector("#preco-a")
    preco_areia.innerHTML = "<span>R$" + areia.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-a").src = areia.img
}

function infoCardPedra() {
    pedra.id.innerHTML = pedra.nome;
    var preco_pedra = document.querySelector("#preco-p")
    preco_pedra.innerHTML = "<span>R$" + pedra.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-p").src = pedra.img
}

function infoCardGesso() {
    gesso.id.innerHTML = gesso.nome;
    var preco_gesso = document.querySelector("#preco-g")
    preco_gesso.innerHTML = "<span>R$" + gesso.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-g").src = gesso.img
}

function infoCardDrywall() {
    drywall.id.innerHTML = drywall.nome;
    var preco_drywall = document.querySelector("#preco-d")
    preco_drywall.innerHTML = "<span>R$" + drywall.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-d").src = drywall.img
}

function infoCardVidro() {
    vidro.id.innerHTML = vidro.nome;
    var preco_vidro = document.querySelector("#preco-v")
    preco_vidro.innerHTML = "<span>R$" + vidro.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-v").src = vidro.img
}

function infoCardCimento() {
    cimento.id.innerHTML = cimento.nome;
    var preco_cimento = document.querySelector("#preco-c")
    preco_cimento.innerHTML = "<span>R$" + cimento.preco.toFixed(2) + "/M³</span>"
    document.querySelector("#img-c").src = cimento.img
}

const carrinho = []

function addAreia() {
    if (!carrinho.includes(areia)) {
        carrinho.push(areia);
    } else {
        let txt_retorno = document.querySelector("#txt-retorno-a");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";

        do {
            var c = 0

            setTimeout(() => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while (c == 0)
    }
}

function addPedra() {
    if (!carrinho.includes(pedra)) {
        carrinho.push(pedra);
    } else {
        let txt_retorno = document.querySelector("#txt-retorno-p");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";

        do {
            var c = 0

            setTimeout(() => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while (c == 0)
    }
}

function addGesso() {
    if (!carrinho.includes(gesso)) {
        carrinho.push(gesso);
    } else {
        let txt_retorno = document.querySelector("#txt-retorno-g");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";

        do {
            var c = 0

            setTimeout(() => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while (c == 0)
    }
}

function addDrywall() {
    if (!carrinho.includes(drywall)) {
        carrinho.push(drywall);
    } else {
        let txt_retorno = document.querySelector("#txt-retorno-d");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";

        do {
            var c = 0

            setTimeout(() => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while (c == 0)
    }
}

function addVidro() {
    if (!carrinho.includes(vidro)) {
        carrinho.push(vidro);
    } else {
        let txt_retorno = document.querySelector("#txt-retorno-v");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";

        do {
            var c = 0

            setTimeout(() => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while (c == 0)
    }
}

function addCimento() {
    if (!carrinho.includes(cimento)) {
        carrinho.push(cimento);
    } else {
        let txt_retorno = document.querySelector("#txt-retorno-c");
        txt_retorno.innerHTML = "<p>Produto já adicionado!</p>";

        do {
            var c = 0

            setTimeout(() => {
                return txt_retorno.innerHTML = "";
            }, 2500);

            c++;
        } while (c == 0)
    }
}

function mostraQtdeCarrinho() {
    let valor_carrinho = document.querySelector('#valor-carrinho');

    if (carrinho.length === 0 || carrinho.length === undefined) {
        valor_carrinho.innerHTML = "<p>0</p>"
    } else {
        valor_carrinho.innerHTML = "<p>" + carrinho.length + "</p>"
    }
}

function itensCarrinho() {
    let itens = document.querySelector("#itens");
    itens.innerHTML = "";

    if (carrinho.length != 0) {
        const inputs = [];

        for (let i = 0; i < carrinho.length; i++) {
            let produto = carrinho[i],
                imagem = document.createElement("img"),
                desc_produto = document.createElement("p"),
                preco_produto = document.createElement("p"),
                div_item_container = document.createElement("div"),
                div_infos = document.createElement("div"),
                hr = document.createElement("hr"),
                label = document.createElement("label"),
                input = document.createElement("input");

            div_item_container.classList.add("item-container");
            div_infos.classList.add("item-info");

            desc_produto.textContent = produto.nome;
            desc_produto.style.display = "block";
            desc_produto.style.fontSize = "1rem";

            preco_produto.textContent = "R$" + produto.preco.toFixed(2);
            preco_produto.style.fontWeight = "bold";

            imagem.setAttribute("src", `${"../" + produto.img}`);
            imagem.setAttribute("alt", "Falha ao carregar a imagem");

            label.setAttribute("for", `${"id-" + i}`);
            label.textContent = "Qtde:";
            label.style.textAlign = "end";
            label.style.marginBlockStart = ".5rem";

            input.classList.add("form-control");
            input.classList.add("input-value");
            input.setAttribute("id", `${"input-" + i}`);
            input.setAttribute("type", "number");
            input.setAttribute("min", "0");
            input.setAttribute("value", "1");
            input.setAttribute("placeholder", "Ex: 3");

            inputs.push({ input, quantidade: 1 });

            itens.appendChild(div_item_container);
            itens.appendChild(hr);
            div_item_container.appendChild(imagem);
            div_item_container.appendChild(div_infos);
            div_infos.appendChild(desc_produto);
            div_infos.appendChild(preco_produto);
            div_infos.appendChild(label);
            div_infos.appendChild(input);
        }

        const total = document.getElementById("total");

        inputs.forEach((item) => {
            item.input.addEventListener("input", function () {
                item.quantidade = parseInt(this.value);
                calculateTotal();
            });
        });

        function calculateTotal() {
            let sum = 0;
            inputs.forEach((item) => {
                const preco_total = item.quantidade * carrinho[inputs.indexOf(item)].preco;
                sum += preco_total;
            });
            total.textContent = "TOTAL: R$" + sum.toFixed(2);
        }

        calculateTotal();

    } else {
        itens.innerHTML =
            "<p style='text-align: center; margin: 0'>Seu carrinho está vazio! 😭</p>";

        total.textContent = ""
    }
}

var btn_compra = document.getElementById("btn-compra");

btn_compra.addEventListener("click", function(){
    alert("Compra finalizada, obrigado por comprar!")
});