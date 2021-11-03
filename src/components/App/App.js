import "./App.css";
import React from "react";

import SelectDay from "../select-day/select-day";
import SpecialMonths from "../special-months/special-months";
import Result from "../result/result";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prestamo: "",
      plazo: "",
      unidadPlazo: "",
      gastoInicial: "",
      gastoCuota: "",
      formaPago: "",
      diapago1: "",
      diapago2: "",
      tasa: "",
      tipoTasa: "",
      fechaDesembolso: "",
      fechaCuota1: "",
      showMesesEspeciales: false,
      showResult: false,
      mesesEspeciales: {
        enero: 1,
        febrero: 1,
        marzo: 1,
        abril: 1,
        mayo: 1,
        junio: 1,
        julio: 1,
        agosto: 1,
        setiembre: 1,
        octubre: 1,
        noviembre: 1,
        diciembre: 1,
      },
      mesesEspecialesQ: {
        enero: 1,
        febrero: 1,
        marzo: 1,
        abril: 1,
        mayo: 1,
        junio: 1,
        julio: 1,
        agosto: 1,
        setiembre: 1,
        octubre: 1,
        noviembre: 1,
        diciembre: 1,
      },
    };

    this.handlePrestamo = this.handlePrestamo.bind(this);
    this.handlePlazo = this.handlePlazo.bind(this);
    this.handleUnidadPlazo = this.handleUnidadPlazo.bind(this);
    this.handleGastoInicial = this.handleGastoInicial.bind(this);
    this.handleGastoCuota = this.handleGastoCuota.bind(this);
    this.handleFormaPago = this.handleFormaPago.bind(this);
    this.handleDiaPago1 = this.handleDiaPago1.bind(this);
    this.handleDiaPago2 = this.handleDiaPago2.bind(this);
    this.handleTasa = this.handleTasa.bind(this);
    this.handleTipoTasa = this.handleTipoTasa.bind(this);
    this.handleFechaDesembolso = this.handleFechaDesembolso.bind(this);
    this.handleFechaCuota = this.handleFechaCuota.bind(this);
    this.handleBotonMesEspecial = this.handleBotonMesEspecial.bind(this);
    this.showResults = this.showResults.bind(this);
    this.handleMesEspecial = this.handleMesEspecial.bind(this);
    this.handleMesEspecialQ = this.handleMesEspecialQ.bind(this);
  }

  handlePrestamo(e) {
    this.setState({
      prestamo: parseFloat(e.target.value),
    });
  }

  handlePlazo(e) {
    this.setState({
      plazo: parseFloat(e.target.value),
    });
  }

  handleUnidadPlazo(e) {
    this.setState({
      unidadPlazo: e.target.value,
    });
  }

  handleGastoInicial(e) {
    this.setState({
      gastoInicial: parseFloat(e.target.value),
    });
  }

  handleGastoCuota(e) {
    this.setState({
      gastoCuota: parseFloat(e.target.value),
    });
  }

  handleFormaPago(e) {
    this.setState({
      formaPago: e.target.value,
    });
  }

  handleDiaPago1(e) {
    if (this.state.formaPago === "semanal") {
      this.setState({
        diapago1: e.target.value,
      });
    } else {
      this.setState({
        diapago1: parseInt(e.target.value),
      });
    }
  }

  handleDiaPago2(e) {
    this.setState({
      diapago2: parseInt(e.target.value),
    });
  }

  handleTasa(e) {
    this.setState({
      tasa: parseFloat(e.target.value),
    });
  }

  handleTipoTasa(e) {
    this.setState({
      tipoTasa: e.target.value,
    });
  }

  handleFechaDesembolso(e) {
    this.setState({
      fechaDesembolso: new Date(e.target.value + "T00:00:00"),
    });
  }

  handleFechaCuota(e) {
    this.setState({
      fechaCuota1: new Date(e.target.value),
    });
  }

  handleBotonMesEspecial() {
    if (this.state.showMesesEspeciales === false) {
      this.setState({
        showMesesEspeciales: true,
      });
    } else {
      this.setState({
        showMesesEspeciales: false,
      });
    }
  }

  handleMesEspecial(e) {
    this.setState({
      mesesEspeciales: {
        enero: parseFloat(document.getElementById("enero").value),
        febrero: parseFloat(document.getElementById("febrero").value),
        marzo: parseFloat(document.getElementById("marzo").value),
        abril: parseFloat(document.getElementById("abril").value),
        mayo: parseFloat(document.getElementById("mayo").value),
        junio: parseFloat(document.getElementById("junio").value),
        julio: parseFloat(document.getElementById("julio").value),
        agosto: parseFloat(document.getElementById("agosto").value),
        setiembre: parseFloat(document.getElementById("setiembre").value),
        octubre: parseFloat(document.getElementById("octubre").value),
        noviembre: parseFloat(document.getElementById("noviembre").value),
        diciembre: parseFloat(document.getElementById("diciembre").value),
      },
    });
  }

  handleMesEspecialQ(e) {
    this.setState({
      mesesEspecialesQ: {
        enero: parseFloat(document.getElementById("enero2").value),
        febrero: parseFloat(document.getElementById("febrero2").value),
        marzo: parseFloat(document.getElementById("marzo2").value),
        abril: parseFloat(document.getElementById("abril2").value),
        mayo: parseFloat(document.getElementById("mayo2").value),
        junio: parseFloat(document.getElementById("junio2").value),
        julio: parseFloat(document.getElementById("julio2").value),
        agosto: parseFloat(document.getElementById("agosto2").value),
        setiembre: parseFloat(document.getElementById("setiembre2").value),
        octubre: parseFloat(document.getElementById("octubre2").value),
        noviembre: parseFloat(document.getElementById("noviembre2").value),
        diciembre: parseFloat(document.getElementById("diciembre2").value),
      },
    });
  }

  showResults() {
    this.setState({
      showResult: true,
    });
  }

  render() {
    return (
      <main>
        <header>
          <h1>PDUFLEX</h1>
        </header>
        <section className="formulario">
          <form>
            <div className="prestamo">
              <label htmlFor="prestamo">Monto del préstamo*</label>
              <input
                type="number"
                name="prestamo"
                id="prestamo"
                min="0"
                defaultValue={this.state.prestamo}
                onChange={this.handlePrestamo}
                required
              />
            </div>
            <div className="plazo">
              <label htmlFor="plazo">Plazo*</label>
              <input
                type="number"
                name="plazo"
                id="plazo"
                min="1"
                step="1"
                defaultValue={this.state.plazo}
                onChange={this.handlePlazo}
                required
              />
              <div className="radiolabels">
                <label htmlFor="unidad">Unidad: </label>
                <input
                  type="radio"
                  name="unidad"
                  id="meses"
                  value="meses"
                  onClick={this.handleUnidadPlazo}
                />
                <label htmlFor="meses">Meses</label>
                <input
                  type="radio"
                  name="unidad"
                  id="años"
                  value="años"
                  onClick={this.handleUnidadPlazo}
                />
                <label htmlFor="años">Años</label>
              </div>
            </div>
            <div className="gasto-inicial">
              <label htmlFor="gasto-inicial">Gasto Inicial</label>
              <input
                type="number"
                name="gasto-inicial"
                id="gasto-inicial"
                min="1"
                step="1"
                defaultValue={this.state.gastoInicial}
                onChange={this.handleGastoInicial}
              />
            </div>
            <div className="gasto-cuota">
              <label htmlFor="gasto-cuota">Gasto por Cuota</label>
              <input
                type="number"
                name="gasto-cuota"
                id="gasto-cuota"
                min="1"
                step="1"
                defaultValue={this.state.gastoCuota}
                onChange={this.handleGastoCuota}
              />
            </div>
            <div className="forma-pago">
              <label htmlFor="formapago">Forma de Pago*</label>
              <select
                name="formapago"
                id="formapago"
                defaultChecked={this.state.formaPago}
                onChange={this.handleFormaPago}
                required
              >
                <option value="0">Elige una opcion</option>
                <option value="semanal">Semanal</option>
                <option value="quincenal">Cada 15 días</option>
                <option value="mensual">Mensual</option>
                <option value="bimestral">Bimestral</option>
                <option value="trimestral">Trimestral</option>
              </select>
            </div>

            <SelectDay
              diaPago={this.state.diapago1}
              diaPago2={this.state.diapago2}
              formaPago={this.state.formaPago}
              onDiaPago1={this.handleDiaPago1}
              onDiaPago2={this.handleDiaPago2}
            />

            <div className="tasa">
              <label htmlFor="tasaanual">Tasa anual (%)*</label>
              <input
                type="number"
                name="tasaanual"
                id="tasaanual"
                defaultValue={this.state.gastoCuota}
                onChange={this.handleTasa}
                required
              />
              <div className="radiolabels">
                <label htmlFor="unidad-tasa">Tipo:</label>
                <input
                  type="radio"
                  name="unidad-tasa"
                  id="nominal"
                  value="nominal"
                  onClick={this.handleTipoTasa}
                />
                <label htmlFor="nominal">Nominal</label>
                <input
                  type="radio"
                  name="unidad-tasa"
                  id="efectiva"
                  value="efectiva"
                  onClick={this.handleTipoTasa}
                />
                <label htmlFor="efectiva">Efectiva</label>
              </div>
            </div>
            <div className="fecha-desembolso">
              <label htmlFor="fecha-desembolso">Fecha de Desembolso *</label>
              <input
                type="date"
                name="fecha-desembolso"
                id="fecha-desembolso"
                defaultValue={this.state.fechaDesembolso}
                onChange={this.handleFechaDesembolso}
              />
            </div>
            <div className="fecha-cuota-1">
              <label htmlFor="fecha-cuota-1">Fecha de 1° cuota</label>
              <input
                type="date"
                name="fecha-cuota-1"
                id="fecha-cuota-1"
                defaultValue={this.state.fechaCuota1}
                onChange={this.handleFechaCuota}
              />
            </div>
            <div className="meses-especiales">
              <label htmlFor="mes-especial">Meses especiales</label>
              <div
                className="boton secundario"
                onClick={this.handleBotonMesEspecial}
              >
                Elije mes especial
              </div>
              <SpecialMonths
                mesEspecial={this.state.mesesEspeciales}
                mesEspecialQ={this.state.mesesEspecialesQ}
                showContainer={this.state.showMesesEspeciales}
                onMesEspecial={this.handleMesEspecial}
                onMesEspecialQ={this.handleMesEspecialQ}
                formaPago={this.state.formaPago}
              />
            </div>
            <p className="campos-obligatorios">(*) Campos obligatorios</p>
            <div
              className="boton primario"
              id="calcular"
              onClick={this.showResults}
            >
              Calcular Cuotas
            </div>
          </form>
        </section>
        <Result
          showResult={this.state.showResult}
          months={this.state.mesesEspeciales}
          monthsQ={this.state.mesesEspecialesQ}
          formaPago={this.state.formaPago}
          datosFormulario={this.state}
        />
      </main>
    );
  }
}

export default App;
