import React from "react";
import calcularCuotas from "../../functions/calcularCuotas";
import getDiasDiferencia from "../../functions/getDiasDiferencia";
import getFechasCuotas from "../../functions/getFechasCuotas";
import getTasaDiaria from "../../functions/getTasaDiaria";
import getTasaEfectiva from "../../functions/getTasaEfectiva";
import getTasaNominal from "../../functions/getTasaNominal";
import getValorCuota from "../../functions/getValorCuota";
import getVectoresMensuales from "../../functions/getVectoresMensuales";

class CabeceraTabla extends React.Component {
  render() {
    const obj = this.props.datos;
    const cantidadCuotas = calcularCuotas(obj);
    const formaPago = obj.formaPago;
    let diapago;

    if (formaPago === "quincenal") {
      diapago = obj.diapago1 + " y " + obj.diapago2;
    } else {
      diapago = obj.diapago1;
    }
    const fechasCuotas = getFechasCuotas(obj);
    const diferencias = getDiasDiferencia(obj.fechaDesembolso, fechasCuotas);
    const tasaDiaria = getTasaDiaria(obj.tasa, obj.tipoTasa);
    const vectores = getVectoresMensuales(obj, fechasCuotas);
    const valorCuota = getValorCuota(
      diferencias,
      tasaDiaria,
      obj.prestamo,
      cantidadCuotas,
      vectores
    );
    return (
      <thead>
        <tr>
          <th>Préstamo</th>
          <th>N° Cuotas</th>
          <th>Monto Cuota</th>
          <th>Tipo de tasa</th>
          <th>Tasa(%)</th>
          <th>Forma de Pago</th>
          <th>Día pago</th>
          <th>Tasa Diaria Nominal</th>
          <th>Tasa Diaria Efectiva</th>
        </tr>
        <tr>
          <td>{obj.prestamo}</td>
          <td>{cantidadCuotas}</td>
          <td>{valorCuota.toFixed(5)}</td>
          <td>{obj.tipoTasa}</td>
          <td>{obj.tasa}</td>
          <td>{formaPago}</td>
          <td>{diapago}</td>
          <td>{getTasaNominal(obj.tasa).toFixed(5)}</td>
          <td>{getTasaEfectiva(obj.tasa).toFixed(5)}</td>
        </tr>
      </thead>
    );
  }
}

export default CabeceraTabla;
