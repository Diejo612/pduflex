import React from "react";
import CabeceraTabla from "../cabecera-tabla/caberaTabla";
import CuerpoTabla from "../cuerpo-tabla/cuerpoTabla";

class TablaCuotas extends React.Component {
  render() {
    return (
      <table id="table-to-export">
        <CabeceraTabla datos={this.props.datosFormulario} />
        <CuerpoTabla datos={this.props.datosFormulario} />
      </table>
    );
  }
}

export default TablaCuotas;
