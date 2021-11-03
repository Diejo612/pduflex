import getFechaUltimaCuota from "./getFechaUltimaCuota";
import getFechaPrimeraCuota from "./getFechaPrimeraCuota";

const calcularCuotas = (obj) => {
  if (
    !obj.prestamo ||
    !obj.plazo ||
    !obj.unidadPlazo ||
    !obj.formaPago ||
    !obj.diapago1 ||
    !obj.tasa ||
    !obj.fechaDesembolso
  ) {
    return (
      <p className="alerta">Por favor, complete los campos obligatorios.</p>
    );
  }
  let fechaPrimerDia = getFechaPrimeraCuota(obj);
  let fechaUltimoDia = getFechaUltimaCuota(
    fechaPrimerDia,
    obj.unidadPlazo,
    obj.plazo
  );

  switch (obj.formaPago) {
    case "semanal":
      let diasTotales =
        (fechaUltimoDia.getTime() - fechaPrimerDia.getTime()) /
        (1000 * 60 * 60 * 24);
      return Math.ceil(diasTotales / 7);
    case "quincenal":
      if (obj.unidadPlazo === "meses") {
        return Math.ceil(obj.plazo * 2);
      } else {
        return Math.ceil(obj.plazo * 24);
      }
    case "mensual":
      if (obj.unidadPlazo === "meses") {
        return Math.ceil(obj.plazo * 1);
      } else {
        return Math.ceil(obj.plazo * 12);
      }
    case "bimestral":
      if (obj.unidadPlazo === "meses") {
        return Math.ceil(obj.plazo / 2);
      } else {
        return Math.ceil(obj.plazo * 6);
      }
    case "trimestral":
      if (obj.unidadPlazo === "meses") {
        return Math.ceil(obj.plazo / 3);
      } else {
        return Math.ceil(obj.plazo * 4);
      }
    default:
      return "Error en el obj.formaPago";
  }
};

export default calcularCuotas;
