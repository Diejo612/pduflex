import React from "react";

class SelectDay extends React.Component {

  
  render() {
    switch (this.props.formaPago) {
      case "semanal":
        return (
          <div className="dia-pago">
            <label htmlFor="dia-pago">Elija un día de la semana</label>
            <select
              name="dia-pago"
              id="dia-pago"
              defaultChecked={this.props.diaPago}
              onChange={this.props.onDiaPago1}
              required
            >
              <option value="0">Elige un día de la semana</option>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miércoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
              <option value="sabado">Sábado</option>
              <option value="domingo">Domingo</option>
            </select>
          </div>
        );

      case "quincenal":
        return (
          <div className="dia-pago">
            <label htmlFor="dia-pago">Coloca los días a pagar</label>
            <div className="grid-quincenal">
              <input
                type="number"
                name="dia-pago-1"
                id="dia-pago-1"
                max="17"
                min="13"
                step="1"
                placeholder="13 - 17"
                defaultValue={this.props.diaPago}
                onChange={this.props.onDiaPago1}
                required
              />
              <input
                type="number"
                name="dia-pago-2"
                id="dia-pago-2"
                max="31"
                min="1"
                step="1"
                placeholder="28 - 3"
                defaultValue={this.props.diaPago2}
                onChange={this.props.onDiaPago2}
                required
              />
            </div>
          </div>
        );

      case "mensual":
        return (
          <div className="dia-pago">
            <label htmlFor="dia-pago">Coloca el día a pagar</label>
            <input
              type="number"
              name="dia-pago"
              id="dia-pago"
              max="31"
              min="1"
              step="1"
              defaultValue={this.props.diaPago}
              onChange={this.props.onDiaPago1}
              required
            />
          </div>
        );

      case "bimestral":
        return (
          <div className="dia-pago">
            <label htmlFor="dia-pago">Coloca el día a pagar</label>
            <input
              type="number"
              name="dia-pago"
              id="dia-pago"
              max="31"
              min="1"
              step="1"
              defaultValue={this.props.diaPago}
              onChange={this.props.onDiaPago1}
              required
            />
          </div>
        );

      case "trimestral":
        return (
          <div className="dia-pago">
            <label htmlFor="dia-pago">Coloca el día a pagar</label>
            <input
              type="number"
              name="dia-pago"
              id="dia-pago"
              max="31"
              min="1"
              step="1"
              defaultValue={this.props.diaPago}
              onChange={this.props.onDiaPago1}
              required
            />
          </div>
        );

      default:
        return "Elija una forma de pago";
    }
  }
}

export default SelectDay;
