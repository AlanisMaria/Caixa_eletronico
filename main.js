const entrada = require('./caixa/entrada');
const calculo = require('./caixa/calculo');
const exibicao = require('./caixa/exibicao');

// Função principal que coordena o fluxo do programa
function iniciarSimulador() {
  const valor = entrada.solicitarValor();
  const resultado = calculo.calcularNotas(valor);
  exibicao.exibirResultado(resultado);
}

iniciarSimulador();
