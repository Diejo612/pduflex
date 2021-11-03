const getDiasDiferencia = (desembolso, cuotas) => {
  let diferenciaDiaria = [];
  let diferenciaAcumulada = [];

  diferenciaDiaria.push(
    (cuotas[0].getTime() - desembolso.getTime()) / (1000 * 60 * 60 * 24)
  );
  diferenciaAcumulada.push(diferenciaDiaria[0]);
  for (let i = 1; i < cuotas.length; i++) {
    diferenciaDiaria.push(
      (cuotas[i].getTime() - cuotas[i - 1].getTime()) / (1000 * 60 * 60 * 24)
    );
    diferenciaAcumulada.push(diferenciaAcumulada[i - 1] + diferenciaDiaria[i]);
  }

  let diferencias = [diferenciaDiaria, diferenciaAcumulada];

  return diferencias;
};

export default getDiasDiferencia;
