import React from "react";
import "./preInfo.css";
import calcularCuotas from "../../functions/calcularCuotas";
import getTasaEfectiva from "../../functions/getTasaEfectiva";
import getTasaNominal from "../../functions/getTasaNominal";

class PreInfo extends React.Component {
  render() {
    let tasa = 0;
    if (this.props.datosFormulario.tipoTasa === "nominal") {
      tasa = getTasaNominal(this.props.datosFormulario.tasa);
    } else {
      tasa = getTasaEfectiva(this.props.datosFormulario.tasa);
    }

    return (
      <div className="pre-info">
        <div className="cantidad-cuotas">
          <label htmlFor="cantidad-cuotas">Cantidad de cuotas</label>
          <input
            type="number"
            name="cantidad-cuotas"
            id="cantidad-cuotas"
            value={calcularCuotas(this.props.datosFormulario)}
            disabled
            readOnly
          />
        </div>
        <div className="tasa-diaria">
          <label htmlFor="tasa-diaria">Tasa Diaria</label>
          <input
            type="number"
            name="tasa-diaria"
            id="tasa-diaria"
            value={tasa.toFixed(5)}
            disabled
            readOnly
          />
        </div>

        <div className="importe de Cuota">
          <label htmlFor="valorCuotaIndividual">Importe por cuota</label>
          <input
            type="number"
            name="valorCuotaIndividual"
            id="valor"
            readOnly
          />
        </div>

        <div className="totalAPagar">
          <label htmlFor="totalPagado">Total Pagado</label>
          <input type="number" name="totalPagado" id="total" readOnly />
        </div>
      </div>
    );
  }
}

export default PreInfo;
