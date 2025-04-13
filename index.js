const prompt = require('prompt-sync')();


//Entradas do usuário
const nomeFii = prompt("Nome do Fundo Imobiliário: ");
const cotacaoAtual = parseFloat(prompt("Cotação atual: R$ ").replace(",", "."));
const dividendoPorCota = parseFloat(prompt("Último dividendo pago:R$ ").replace(",", "."));
const valorInvestido = parseFloat(prompt("Valor investido R$: ").replace(",", "."));

//Cálculos
const cotasCompradas = Math.floor(valorInvestido / cotacaoAtual);
const dividendosEstimados = cotasCompradas * dividendoPorCota.toFixed(2);


//Saídas
console.log (nomeFii);
console.log("Você compraria", cotasCompradas, "cotas.");
console.log("Receberia aproximadamente R$" + dividendosEstimados.toFixed(2) + " por mês.");