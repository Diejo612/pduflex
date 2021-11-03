import React from "react";
import finalCuerpoTabla from "./finalCuerpoTabla";

class CuerpoTabla extends React.Component {
    render(){
        const datos = this.props.datos;
        let rows = finalCuerpoTabla(datos);
        let fechaDesembolso = datos.fechaDesembolso;
        let dayD = fechaDesembolso.getDate();
        let monthD = fechaDesembolso.getMonth()+1;
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
        )
    }
}


export default CuerpoTabla;