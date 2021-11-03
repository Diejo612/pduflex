const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "setiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const getVectoresMensuales = (datos, cuotas) => {
  const formaPago = datos.formaPago;
  let vectorCuota = [];
  const mesesEspeciales = datos.mesesEspeciales;
  const mesesEspecialesQ = datos.mesesEspecialesQ;

  for (let i = 0; i < cuotas.length; i++) {
    let mesCuota = meses[cuotas[i].getMonth()];
    let diaCuota = cuotas[i].getDate();
    if (formaPago !== "quincenal") {
      vectorCuota.push(mesesEspeciales[mesCuota]);
    } else {
      if (diaCuota > 3 && diaCuota < 18) {
        vectorCuota.push(mesesEspeciales[mesCuota]);
      } else {
        vectorCuota.push(mesesEspecialesQ[mesCuota]);
      }
    }
  }

  return vectorCuota;
};

export default getVectoresMensuales;
