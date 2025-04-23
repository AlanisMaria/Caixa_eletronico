// Função que exibe o resultado das cédulas distribuídas
function exibirResultado(resultado) {
    console.log('Notas entregues:');
    resultado.forEach(item => {
      console.log(`${item.quantidade} nota(s) de R$ ${item.valor}`);
    });
  }
  
  module.exports = {
    exibirResultado
  };
  