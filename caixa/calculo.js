// Cédulas disponíveis no caixa eletrônico
const cedulas = [100, 50, 20, 10, 5, 2, 1];

// Função que calcula as notas necessárias para o valor informado
function calcularNotas(valor) {
  const resultado = [];
  
  cedulas.forEach(cedula => {
    const quantidadeNotas = Math.floor(valor / cedula);
    if (quantidadeNotas > 0) {
      resultado.push({ valor: cedula, quantidade: quantidadeNotas });
      valor -= quantidadeNotas * cedula;  // Subtrai o valor já distribuído
    }
  });

  return resultado;
}

module.exports = {
  calcularNotas
};
