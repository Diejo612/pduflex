import React from "react";
import "./special-months.css";

class SpecialMonths extends React.Component {
  render() {
    if (this.props.showContainer === true) {
      if (this.props.formaPago !== "quincenal") {
        return (
          <div className="mes-especial">
            <div className="container-mes">
              <label htmlFor="enero">Enero</label>
              <input
                type="number"
                className="enero"
                id="enero"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.enero}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="febrero">Febrero</label>
              <input
                type="number"
                className="febrero"
                id="febrero"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.febrero}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="marzo">Marzo</label>
              <input
                type="number"
                className="marzo"
                id="marzo"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.marzo}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="abril">Abril</label>
              <input
                type="number"
                className="abril"
                id="abril"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.abril}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="mayo">Mayo</label>
              <input
                type="number"
                className="mayo"
                id="mayo"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.mayo}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="junio">Junio</label>
              <input
                type="number"
                className="junio"
                id="junio"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.junio}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="julio">Julio</label>
              <input
                type="number"
                className="julio"
                id="julio"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.julio}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="agosto">Agosto</label>
              <input
                type="number"
                className="agosto"
                id="agosto"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.agosto}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="setiembre">Setiembre</label>
              <input
                type="number"
                className="setiembre"
                id="setiembre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.setiembre}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="octubre">Octubre</label>
              <input
                type="number"
                className="octubre"
                id="octubre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.octubre}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="noviembre">Noviembre</label>
              <input
                type="number"
                className="noviembre"
                id="noviembre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.noviembre}
                onChange={this.props.onMesEspecial}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="diciembre">Diciembre</label>
              <input
                type="number"
                className="diciembre"
                id="diciembre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.diciembre}
                onChange={this.props.onMesEspecial}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="mes-especial">
            <div className="container-mes">
              <label htmlFor="enero">Enero</label>
              <input
                type="number"
                className="enero"
                id="enero"
                min="0"
                max="31"
                step="0.5"
                defaultValue={this.props.mesEspecial.enero}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="enero2"
                id="enero2"
                min="0"
                max="31"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.enero}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="febrero">Febrero</label>
              <input
                type="number"
                className="febrero"
                id="febrero"
                min="0"
                max="31"
                step="0.5"
                defaultValue={this.props.mesEspecial.febrero}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="febrero2"
                id="febrero2"
                min="0"
                max="31"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.febrero}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="marzo">Marzo</label>
              <input
                type="number"
                className="marzo"
                id="marzo"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.marzo}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="marzo2"
                id="marzo2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.marzo}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="abril">Abril</label>
              <input
                type="number"
                className="abril"
                id="abril"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.abril}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="abril2"
                id="abril2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.abril}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="mayo">Mayo</label>
              <input
                type="number"
                className="mayo"
                id="mayo"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.mayo}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="mayo2"
                id="mayo2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.mayo}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="junio">Junio</label>
              <input
                type="number"
                className="junio"
                id="junio"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.junio}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="junio2"
                id="junio2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.junio}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="julio">Julio</label>
              <input
                type="number"
                className="julio"
                id="julio"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.julio}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="julio2"
                id="julio2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.julio}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="agosto">Agosto</label>
              <input
                type="number"
                className="agosto"
                id="agosto"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.agosto}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="agosto2"
                id="agosto2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.agosto}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="setiembre">Setiembre</label>
              <input
                type="number"
                className="setiembre"
                id="setiembre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.setiembre}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="setiembre2"
                id="setiembre2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.setiembre}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="octubre">Octubre</label>
              <input
                type="number"
                className="octubre"
                id="octubre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.octubre}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="octubre2"
                id="octubre2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.octubre}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="noviembre">Noviembre</label>
              <input
                type="number"
                className="noviembre"
                id="noviembre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.noviembre}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="noviembre2"
                id="noviembre2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.noviembre}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
            <div className="container-mes">
              <label htmlFor="diciembre">Diciembre</label>
              <input
                type="number"
                className="diciembre"
                id="diciembre"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecial.diciembre}
                onChange={this.props.onMesEspecial}
              />
              <input
                type="number"
                className="diciembre2"
                id="diciembre2"
                min="0"
                max="30"
                step="0.5"
                defaultValue={this.props.mesEspecialQ.diciembre}
                onChange={this.props.onMesEspecialQ}
              />
            </div>
          </div>
        );
      }
    } else {
      return "";
    }
  }
}

export default SpecialMonths;
