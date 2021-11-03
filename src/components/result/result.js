import React from "react";
import "./result.css";
import ResultsMonths from "../special-month-filtered/resultsMonths";
import PreInfo from "../preInfo/preInfo";
import TablaCuotas from "../tabla-cuotas/tablaCuotas";
import downloadTable from "../../functions/downloadTable";

class Result extends React.Component {
  render() {
    if (this.props.showResult) {
      if (
        !this.props.datosFormulario.prestamo ||
        !this.props.datosFormulario.plazo ||
        !this.props.datosFormulario.unidadPlazo ||
        !this.props.datosFormulario.formaPago ||
        !this.props.datosFormulario.diapago1 ||
        !this.props.datosFormulario.tasa ||
        !this.props.datosFormulario.fechaDesembolso
      ) {
        return (
          <section className="result">
            Por favor, complete los campos necesarios
          </section>
        );
      } else {
        return (
          <section className="result">
            <h2>Meses Especiales</h2>
            <ResultsMonths
              months={this.props.months}
              monthsQ={this.props.monthsQ}
              formaPago={this.props.formaPago}
            />
            <h2>Información cuotas</h2>
            <PreInfo datosFormulario={this.props.datosFormulario} />
            <h2>Tabla de Cuotas</h2>
            <div className="boton excel" id="test" onClick={downloadTable}>
              Descargar tabla
            </div>
            <TablaCuotas
              datosFormulario={this.props.datosFormulario}
              changeValor={this.props.changeValor}
              changeTotal={this.props.changeTotal}
            />
          </section>
        );
      }
    } else {
      return <section className="result"></section>;
    }
  }
}

export default Result;
