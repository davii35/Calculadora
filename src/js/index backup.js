// console.clear()

// const display = document.querySelector(".calculadora_display");
// const botoesNumericos = document.querySelectorAll(".botao-numerico");
// const botoesFuncoes = document.querySelectorAll(".botao-funcao");
// const botoesOpcoes = document.querySelectorAll(".botao-opcoes");

// let primeiroNumero = "";
// let segundoNumero = "";
// let resultado;
// let operacao;

// let exibiuResultadoPorUltimo;
// let bloqueiaInserirDoisOperadores;
// let obtevePrimeiroNumero;
// let obteveSegundoNumero = false;

// function corrigeCasasDecimais() {
//     resultado = resultado.toFixed(2);
// }

// function calculaResultado() {
//     switch (operacao) {
//         case "somar":
//             resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);
//             // corrigeCasasDecimais()
//             break

//         case "subtrair":
//             resultado = parseInt(primeiroNumero) - parseInt(segundoNumero);
//             // corrigeCasasDecimais()
//             break

//         case "multiplicar":
//             resultado = parseInt(primeiroNumero) * parseInt(segundoNumero);
//             // corrigeCasasDecimais()
//             break

//         case "dividir":
//             resultado = parseInt(primeiroNumero) / parseInt(segundoNumero);
//             // corrigeCasasDecimais()
//             break
//     }
// }

// function atualizaDisplay(acao, numeroDigitado) {
//     if ((display.textContent == "") && (acao != "inserir-numero")) return; //<- Impede o usuário de iniciar com algum operador aritmétrico;

//     if (exibiuResultadoPorUltimo && acao == "inserir-numero") { //<- Após exibir um resultado: (1)Permite o usuário iniciar nova operação digitando um novo valor, OU (2) iniciar nova operação a partir do resultado;
//         exibiuResultadoPorUltimo = false;
//         obtevePrimeiroNumero = false;
//         display.textContent = numeroDigitado;
//         return
//     } else if (exibiuResultadoPorUltimo && acao != "inserir-numero") {
//         exibiuResultadoPorUltimo = false;
//         obtevePrimeiroNumero = true;
//     }

//     if (bloqueiaInserirDoisOperadores && acao != "inserir-numero" && acao != "limpar" && acao != "resultado") { //<- Impere o usuário de inserir dois operadores aritmétricos em sequência; 
//         display.textContent = primeiroNumero;
//     }

//     switch (acao) {
//         case "limpar":
//             primeiroNumero, segundoNumero = "";
//             obtevePrimeiroNumero = false;
//             display.textContent = "";
//             break;

//         case "inserir-numero":
//             if (obtevePrimeiroNumero) {
//                 segundoNumero += numeroDigitado;
//                 obteveSegundoNumero = true;
//             }
//             display.textContent += numeroDigitado;
//             bloqueiaInserirDoisOperadores = false;
//             break;

//         case "resultado":
//             calculaResultado();
//             segundoNumero = "";
//             obteveSegundoNumero = false;
//             display.textContent = resultado;
//             exibiuResultadoPorUltimo = true;
//             break;

//         case "somar":
//             primeiroNumero = display.textContent;
//             display.textContent += " + ";
//             obtevePrimeiroNumero = true;
//             bloqueiaInserirDoisOperadores = true;
//             break;

//         case "subtrair":
//             primeiroNumero = display.textContent;
//             display.textContent += " - ";
//             obtevePrimeiroNumero = true;
//             bloqueiaInserirDoisOperadores = true;
//             break;

//         case "multiplicar":
//             primeiroNumero = display.textContent;
//             display.textContent += " x ";
//             obtevePrimeiroNumero = true;
//             bloqueiaInserirDoisOperadores = true;
//             break;

//         case "dividir":
//             primeiroNumero = display.textContent;
//             display.textContent += " ÷ ";
//             obtevePrimeiroNumero = true;
//             bloqueiaInserirDoisOperadores = true;
//             break;
//     }
// }

// for (let i = 0; i < botoesNumericos.length; i++) {
//     botoesNumericos[i].addEventListener("click", function () {
//         let numeroDigitado = botoesNumericos[i].textContent;
//         atualizaDisplay("inserir-numero", numeroDigitado)
//     })
// }

// for (let i = 0; i < botoesFuncoes.length; i++) {
//     botoesFuncoes[i].addEventListener("click", function () {
//         let nomeDoBotao = botoesFuncoes[i].id;
//         atualizaDisplay(nomeDoBotao);
//         operacao = nomeDoBotao;
//     })
// }

// for (let i = 0; i < botoesOpcoes.length; i++) {
//     botoesOpcoes[i].addEventListener("click", function () {
//         let nomeDaOpcao = botoesOpcoes[i].id;
//         console.log(nomeDaOpcao);
//     })
// }