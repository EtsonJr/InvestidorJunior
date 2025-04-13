const prompt = require('prompt-sync')();


//Entradas do usuário
const nomeFii = prompt("Nome do Fundo Imobiliário: ");
//Entrada do usuário para identificar o nome do FII.
const cotacaoAtual = parseFloat(prompt("Cotação atual: R$ ").replace(",", "."));
//Cotação atual do Fii para fazer o calculo da quantidade de cotas que será possivel comprar com o valor aplicado pelo usuário.
const dividendoPorCota = parseFloat(prompt("Último dividendo pago:R$ ").replace(",", "."));
//Valor pago por mês de 1 cota.
const valorInvestido = parseFloat(prompt("Valor investido R$: ").replace(",", "."));
//Montante que será investido pelo usuário.

//Cálculos
const cotasCompradas = Math.floor(valorInvestido / cotacaoAtual);
//Total de cotas que podem ser compradas pelo valor que o usuário informou na etapa anterior.
const dividendosEstimados = cotasCompradas * dividendoPorCota.toFixed(2);
//Estimativa do valor que será recebido pelo usuário caso ele aplique o valor informado em valorInvestido.


//Saídas
console.log (nomeFii);
console.log("Você compraria", cotasCompradas, "cotas.");
console.log("Receberia aproximadamente R$" + dividendosEstimados.toFixed(2) + " por mês.");