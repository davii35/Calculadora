const botoesNumeros = document.querySelectorAll(".botao-numerico");
const botoesFuncoes = document.querySelectorAll(".botao-funcao");
const botoesOpcoes = document.querySelectorAll(".botao-opcoes");
const containerHistorico = document.querySelector(".container-historico");
const historico = document.querySelector(".historico");
const botaoFecharHistorico = document.querySelector(".botao-fechar");
const botaoLimparHistorico = document.querySelector(".botao-limpar");

let displayPrincipal = document.querySelector(".display-principal");
let displaySecundario = document.querySelector(".display-secundario");

let primeiroNumero;
let segundoNumero;
let operador;
let resultado;

let historicoLista = [];
let resultadosLista = [];

function calculaResultado() {
    primeiroNumero = parseFloat(primeiroNumero);
    segundoNumero = parseFloat(segundoNumero);

    if (operador === " + ") {
        resultado = primeiroNumero + segundoNumero;
    } else if (operador === " - ") {
        resultado = primeiroNumero - segundoNumero;
    } else if (operador === " x ") {
        resultado = primeiroNumero * segundoNumero;
    } else if (operador === " ÷ ") {
        resultado = primeiroNumero / segundoNumero;
    }
}

function atualizaDisplay(acao, numeroClicado, operadorClicado) {
    switch (acao) {
        case "limpar":
            primeiroNumero = segundoNumero = operador = resultado = undefined;
            displayPrincipal.textContent = displaySecundario.textContent = "";
            break

        case "inserir-numero":
            if(numeroClicado === "." && displayPrincipal.textContent === "") {
                displayPrincipal.textContent = "0.";
                return;
            }
            if (segundoNumero === "") {
                segundoNumero += numeroClicado;
                displayPrincipal.textContent = numeroClicado;
                break
            } else if (segundoNumero !== undefined) {
                segundoNumero += numeroClicado;
                displayPrincipal.textContent += numeroClicado;
                break
            }
            if (resultado === "") {
                displayPrincipal.textContent = displaySecundario.textContent = "";
                primeiroNumero = segundoNumero = operador = resultado = undefined;
            }
            displayPrincipal.textContent += numeroClicado;
            break

        case "resultado":
            if ((displayPrincipal.textContent === "") || (segundoNumero === undefined)) return
            if (segundoNumero === "") segundoNumero = displayPrincipal.textContent;

            calculaResultado(operador);
            corrigeCasasDecimais();
            displaySecundario.textContent += segundoNumero + " = ";
            displayPrincipal.textContent = resultado;
            historicoLista.unshift(displaySecundario.textContent + resultado);
            segundoNumero = undefined;
            resultado = "";
            break

        case "somar":
        case "subtrair":
        case "multiplicar":
        case "dividir":
            if (segundoNumero != undefined && segundoNumero != "") {
                atualizaDisplay("resultado");
                primeiroNumero = displayPrincipal.textContent;
                operador = operadorClicado;
                displaySecundario.textContent = primeiroNumero + operadorClicado;
            }

            if (displayPrincipal.textContent === "") return
            primeiroNumero = displayPrincipal.textContent;
            operador = operadorClicado;
            segundoNumero = "";
            displaySecundario.textContent = primeiroNumero + operadorClicado;
            break
    }
}

function corrigeCasasDecimais() {
    let resultadoEmString = resultado.toString();
    if (resultadoEmString.includes(".")) {
        let resultadoPartes = resultadoEmString.split(".");
        if (resultadoPartes[1].length > 2) resultado = resultado.toFixed(2);
    }
}

function exibirHistorico() {
    if (historicoLista.length !== 0) historico.innerHTML = "";
    for (let i = 0; i < historicoLista.length; i++) {        
        historico.innerHTML += `<li class="historico-item">${historicoLista[i]}</li>`;
    }
    containerHistorico.style.display = "flex";
}

function copiar(textoParaSerCopiado) {
    console.log(`Copiou isso -> ${textoParaSerCopiado}`);
    //Em construção...
}

function apagar() {
    if (resultado === "") {
        displaySecundario.textContent = "";
    } else if (displayPrincipal.textContent === primeiroNumero) return

    if (displayPrincipal.textContent.length === 1) {
        atualizaDisplay("limpar");
        return
    }
    displayPrincipal.textContent = displayPrincipal.textContent.slice(0, -1);
}

for (let i = 0; i < botoesNumeros.length; i++) {
    botoesNumeros[i].addEventListener("click", function () {
        let numeroClicado = botoesNumeros[i].textContent;
        atualizaDisplay("inserir-numero", numeroClicado);
    })
}

for (let i = 0; i < botoesFuncoes.length; i++) {
    botoesFuncoes[i].addEventListener("click", function () {
        let funcaoClicada = botoesFuncoes[i].id;
        let operadorClicado = botoesFuncoes[i].getAttribute("data-operador");
        atualizaDisplay(funcaoClicada, undefined, operadorClicado);
    })
}

for (let i = 0; i < botoesOpcoes.length; i++) {
    botoesOpcoes[i].addEventListener("click", function () {
        let opcaoClicada = botoesOpcoes[i].id;
        if (opcaoClicada === "historico") exibirHistorico();
        if (opcaoClicada === "apagar") apagar();
        if (opcaoClicada === "copiar") copiar("Davi passou por aqui!");
    })
}

botaoFecharHistorico.addEventListener("click", function () {
    containerHistorico.style.display = "none";
})

botaoLimparHistorico.addEventListener("click", function () {
    historicoLista.length = 0;
    historico.innerHTML = '<li class="historico-vazio">O histórico está vazio!</li>';
})