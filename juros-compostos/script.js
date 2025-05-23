function calcular() {
  const capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
  const aporteMensal = parseFloat(document.getElementById("aporteMensal").value);
  let taxaJuros = parseFloat(document.getElementById("taxaJuros").value);
  let periodo = parseInt(document.getElementById("periodo").value);

  const tipoTaxa = document.getElementById("tipoTaxa").value;
  const tipoPeriodo = document.getElementById("tipoPeriodo").value;

  if (isNaN(capitalInicial) || isNaN(aporteMensal) || isNaN(taxaJuros) || isNaN(periodo)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // Conversão de taxa para mensal
  if (tipoTaxa === "anual") {
    taxaJuros = Math.pow(1 + taxaJuros / 100, 1 / 12) - 1;
  } else {
    taxaJuros = taxaJuros / 100;
  }

  // Conversão de período para meses
  if (tipoPeriodo === "anos") {
    periodo = periodo * 12;
  }

  let montante = capitalInicial;
  let historico = [montante];

  for (let i = 1; i <= periodo; i++) {
    montante = (montante + aporteMensal) * (1 + taxaJuros);
    historico.push(montante);
  }

  const totalInvestido = capitalInicial + (aporteMensal * periodo);
  const rendimento = montante - totalInvestido;

  document.getElementById("resultado").innerHTML = `
    <p>Montante final: <strong>R$ ${montante.toFixed(2)}</strong></p>
    <p>Total investido: <strong>R$ ${totalInvestido.toFixed(2)}</strong></p>
    <p>Rendimento obtido: <strong>R$ ${rendimento.toFixed(2)}</strong></p>
  `;

  renderizarGrafico(historico);
}

function limpar() {
  document.getElementById("capitalInicial").value = "";
  document.getElementById("aporteMensal").value = "";
  document.getElementById("taxaJuros").value = "";
  document.getElementById("periodo").value = "";
  document.getElementById("resultado").innerHTML = "";
  if (window.grafico) {
    window.grafico.destroy();
  }
}

function renderizarGrafico(dados) {
  const ctx = document.getElementById("grafico").getContext("2d");
  if (window.grafico) {
    window.grafico.destroy();
  }
  window.grafico = new Chart(ctx, {
    type: "line",
    data: {
      labels: dados.map((_, i) => i),
      datasets: [{
        label: "Valor Acumulado (R$)",
        data: dados,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderWidth: 2,
        pointRadius: 1,
        fill: true,
        tension: 0.2
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Meses"
          }
        },
        y: {
          title: {
            display: true,
            text: "Valor (R$)"
          }
        }
      }
    }
  });
}
