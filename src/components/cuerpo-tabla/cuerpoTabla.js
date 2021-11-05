import React from "react";
import finalCuerpoTabla from "./finalCuerpoTabla";

class CuerpoTabla extends React.Component {
  
  render() {
    const datos = this.props.datos;
    let rows = finalCuerpoTabla(datos);
    let fechaDesembolso = datos.fechaDesembolso;
    let dayD = fechaDesembolso.getDate();
    let monthD = fechaDesembolso.getMonth() + 1;
    let yearD = fechaDesembolso.getFullYear();
    fechaDesembolso = `${yearD}-${monthD}-${dayD}`; 

    return (
      <tbody>
        <tr>
          <th>Cuota</th>
          <th>Fecha Pago</th>
          <th>Principal al Inicio</th>
          <th>Interés</th>
          <th>Capital</th>
          <th>Total</th>
          <th>Principal al final</th>
          <th>Normal</th>
          <th>%Normal</th>
        </tr>
        <tr>
          <td>0</td>
          <td>{fechaDesembolso}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {[rows]}
      </tbody>
    );
  }
}

// ReactDOM.render(
//   <div>
//     <div className="importe de Cuota">
//       <label htmlFor="valorCuotaIndividual">Importe por cuota</label>
//       <input
//         type="number"
//         name="valorCuotaIndividual"
//         id="valor"
//         value={valorCuota}
//         disabled
//         readOnly
//       />
//     </div>
    
//     <div className="totalAPagar">
//       <label htmlFor="totalPagado">Total Pagado</label>
//       <input type="number" name="totalPagado" id="total" value={pagototal} disabled readOnly />
//     </div>
//   </div>, document.getElementById('info-cuotas')
// );
export default CuerpoTabla;
