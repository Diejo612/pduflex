import React from "react";
import "./result.css";
import ResultsMonths from "../special-month-filtered/resultsMonths";
import PreInfo from "../preInfo/preInfo";
import TablaCuotas from "../tabla-cuotas/tablaCuotas";
import ReactHTMLTableToExcel from "react-html-table-to-excel"

class Result extends React.Component {

  render() {
    if (this.props.showResult) {
      let filename ='';
      let fechahoy = new Date();

      let year = fechahoy.getFullYear();
      let month = fechahoy.getMonth();
      let day = fechahoy.getDate();
      let hours = fechahoy.getHours();
      let minutes = fechahoy.getMinutes();
      let sec = fechahoy.getSeconds();

      filename = `Export ${year}-${month}-${day} ${hours}${minutes}${sec}`;

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
          <section className="result" id='result'>
            Por favor, complete los campos necesarios
          </section>
        );
      } else {
        return (
          <section className="result" id='result'>
            <h2>Meses Especiales</h2>
            <ResultsMonths
              months={this.props.months}
              monthsQ={this.props.monthsQ}
              formaPago={this.props.formaPago}
            />
            <h2>Información cuotas</h2>
            <PreInfo datosFormulario={this.props.datosFormulario} valor={this.props.valor} total={this.props.total} />
            <h2>Tabla de Cuotas</h2>
            
            <ReactHTMLTableToExcel 
              table='table-to-export'
              filename={filename}
              sheet='Tabla Cuotas'
              id='button-excel'
              className='boton excel'
              buttonText='Exportar tabla a Excel'
            />

            <TablaCuotas
              datosFormulario={this.props.datosFormulario}
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
