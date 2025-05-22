function calcular() {
  // Pegar os valores dos inputs (lembre-se: sempre são strings!)
  const nomeFii = document.getElementById("nomeFii").value;
  const cotacaoAtual = parseFloat(document.getElementById("cotacaoAtual").value.replace(",", "."));
  const dividendoPorCota = parseFloat(document.getElementById("dividendoPorCota").value.replace(",", "."));
  const valorInvestido = parseFloat(document.getElementById("valorInvestido").value.replace(",", "."));

  // Validar para garantir que os números são válidos
  if (isNaN(cotacaoAtual) || isNaN(dividendoPorCota) || isNaN(valorInvestido)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Cálculos
  const cotasCompradas = Math.floor(valorInvestido / cotacaoAtual);
  const dividendosEstimados = cotasCompradas * dividendoPorCota;

  // Mostrar resultado na div
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <p><strong>${nomeFii}</strong></p>
    <p>Você compraria <strong>${cotasCompradas}</strong> cotas.</p>
    <p>Receberia aproximadamente <strong>R$ ${dividendosEstimados.toFixed(2)}</strong> por mês.</p>
  `;
}
