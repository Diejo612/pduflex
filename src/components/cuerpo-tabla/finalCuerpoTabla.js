import getDiasDiferencia from "../../functions/getDiasDiferencia";
import getFechasCuotas from "../../functions/getFechasCuotas";
import getTasaDiaria from "../../functions/getTasaDiaria";
import getValorCuota from "../../functions/getValorCuota";
import getVectoresMensuales from "../../functions/getVectoresMensuales";
import changeValorInput from "../../functions/changeValor";

const finalCuerpoTabla = (datos) => {
  let rows = [];

  const fechasCuotas = getFechasCuotas(datos);
  const fechasCuotasCadena = [];
  fechasCuotas.forEach((fecha) => {
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let anio = fecha.getFullYear();
    fechasCuotasCadena.push(`${anio}-${mes}-${dia}`);
  });
  let principalInicio = [];
  let interesCuota = [];
  let capital = [];
  let principalFinal = [];

  let vectores = getVectoresMensuales(datos, fechasCuotas);
  let diferencias = getDiasDiferencia(datos.fechaDesembolso, fechasCuotas);
  const tasaDiaria = getTasaDiaria(datos.tasa, datos.tipoTasa);
  const prestamo = datos.prestamo;
  const valorCuota = getValorCuota(
    diferencias,
    tasaDiaria,
    prestamo,
    fechasCuotas.length,
    vectores
  );
  let montoCuota = [];
  vectores.forEach((vector) => {
    montoCuota.push(valorCuota * vector);
  });

  principalInicio[0] = prestamo;

  for (let i = 0; i < fechasCuotas.length; i++) {
    if (vectores[i] === 0) {
      principalFinal[i] =
        principalInicio[i] * Math.pow(1 + tasaDiaria, diferencias[0][i]);
      interesCuota[i] = 0;
      capital[i] = 0;
      principalInicio[i + 1] = principalFinal[i];
    } else {
      interesCuota[i] =
        principalInicio[i] * Math.pow(1 + tasaDiaria, diferencias[0][i]) -
        principalInicio[i];
      capital[i] = montoCuota[i] - interesCuota[i];
      principalFinal[i] = principalInicio[i] - capital[i];
      principalInicio[i + 1] = principalFinal[i];
    }
  }

  changeValorInput("valorCuotaIndividual", valorCuota);

  let pagototal = 0;

  montoCuota.forEach((monto) => {
    pagototal += monto;
  });

  changeValorInput("totalPagado", pagototal);

  for (let i = 0; i < fechasCuotasCadena.length; i++) {
    rows[i] = (
      <tr key={i + 1}>
        <td>{i + 1}</td>
        <td>{fechasCuotasCadena[i]}</td>
        <td>{principalInicio[i].toFixed(3)}</td>
        <td>{interesCuota[i].toFixed(3)}</td>
        <td>{capital[i].toFixed(3)}</td>
        <td>{montoCuota[i].toFixed(3)}</td>
        <td>{principalFinal[i].toFixed(3)}</td>
        <td>{vectores[i]}</td>
        <td></td>
      </tr>
    );
  }

  return rows;
};

export default finalCuerpoTabla;
