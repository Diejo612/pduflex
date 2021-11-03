import calcularCuotas from "./calcularCuotas";
import getFechaPrimeraCuota from "./getFechaPrimeraCuota";
import isBisiesto from "./isBisiesto";

const diaSemana = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const getFechasCuotas = (datos) => {
  let fechasCuotas = [];
  const cantidadCuotas = calcularCuotas(datos);
  let cuota1 = getFechaPrimeraCuota(datos);
  let day = cuota1.getDate();
  let month = cuota1.getMonth();
  let year = cuota1.getFullYear();
  let fecha = new Date(year, month, day);
  const formaPago = datos.formaPago;
  let diapago1 = datos.diapago1;
  let diapago2 = datos.diapago2;
  fechasCuotas[0] = cuota1;
  let i = 1;

  switch (formaPago) {
    case "semanal":
      if (diapago1 === diaSemana[cuota1.getDay()]) {
        while (i < cantidadCuotas) {
          day += 7;
          fecha = new Date(year, month, day);
          fechasCuotas.push(fecha);
          i++;
        }
      } else {
        while (diapago1 !== diaSemana[cuota1.getDay()]) {
          day++;
          cuota1 = new Date(year, month, day);
        }

        while (i < cantidadCuotas) {
          fecha = new Date(year, month, day);
          fechasCuotas.push(fecha);
          day += 7;
          i++;
        }
      }
      break;
    case "quincenal":
      while (i < cantidadCuotas) {
        if (day <= 17 && day > 4) {
          if (
            diapago2 < 32 &&
            diapago2 > 28 &&
            meses[cuota1.getMonth()] === "Febrero"
          ) {
            if (isBisiesto(year)) {
              diapago2 = 29;
            } else {
              diapago2 = 28;
            }
          } else if (
            (meses[fecha.getMonth()] === "Abril" ||
              meses[fecha.getMonth()] === "Junio" ||
              meses[fecha.getMonth()] === "Septiembre" ||
              meses[fecha.getMonth()] === "Noviembre") &&
            diapago2 >= 32
          ) {
            diapago2 = diapago2 - 1;
          } else if (diapago2 >= 32 && meses[fecha.getMonth()] === "Febrero") {
            if (isBisiesto(year)) {
              diapago2 = diapago2 - 2;
            } else {
              diapago2 = diapago2 - 3;
            }
          } else if (
            diapago2 === 31 &&
            (meses[fecha.getMonth()] === "Abril" ||
              meses[fecha.getMonth()] === "Junio" ||
              meses[fecha.getMonth()] === "Septiembre" ||
              meses[fecha.getMonth()] === "Noviembre")
          ) {
            diapago2 = 30;
          }
          day = diapago2;
          fecha = new Date(year, month, day);
          fechasCuotas.push(fecha);
        } else if (day <= 3) {
          day = diapago1;
          fecha = new Date(year, month, day);
          fechasCuotas.push(fecha);
        } else {
          day = diapago1;
          month++;
          fecha = new Date(year, month, day);
          fechasCuotas.push(fecha);
        }
        i++;
      }
      break;
    case "mensual":
      day = diapago1;
      while (i < cantidadCuotas) {
        if (diapago1 > 28 && meses[fecha.getMonth()] === "Enero") {
          if (isBisiesto(year)) {
            day = 29;
          } else {
            day = 28;
          }
        } else if (
          (meses[fecha.getMonth()] === "Marzo" ||
            meses[fecha.getMonth()] === "Mayo" ||
            meses[fecha.getMonth()] === "Agosto" ||
            meses[fecha.getMonth()] === "Octubre") &&
          diapago1 === 31
        ) {
          day = 30;
        } else {
          day = diapago1;
        }

        month++;
        fecha = new Date(year, month, day);
        fechasCuotas.push(fecha);

        i++;
      }
      break;
    case "bimestral":
      day = diapago1;
      while (i < cantidadCuotas) {
        // ojo por si algo funciona, aca cambie
        if (diapago1 > 28 && meses[fecha.getMonth()] === "Diciembre") {
          if (isBisiesto(year)) {
            day = 29;
          } else {
            day = 28;
          }
        } else if (
          (meses[fecha.getMonth()] === "Febrero" ||
            meses[fecha.getMonth()] === "Abril" ||
            meses[fecha.getMonth()] === "Julio" ||
            meses[fecha.getMonth()] === "Septiembre") &&
          diapago1 === 31
        ) {
          day = 30;
        } else {
          day = diapago1;
        }

        month += 2;
        fecha = new Date(year, month, day);
        fechasCuotas.push(fecha);

        i++;
      }
      break;
    case "trimestral":
      day = diapago1;
      while (i < cantidadCuotas) {
        // ojo por si algo funciona, aca cambie
        if (diapago1 > 28 && meses[fecha.getMonth()] === "Noviembre") {
          if (isBisiesto(year)) {
            day = 29;
          } else {
            day = 28;
          }
        } else if (
          (meses[fecha.getMonth()] === "Enero" ||
            meses[fecha.getMonth()] === "Marzo" ||
            meses[fecha.getMonth()] === "Junio" ||
            meses[fecha.getMonth()] === "Agosto") &&
          diapago1 === 31
        ) {
          day = 30;
        } else {
          day = diapago1;
        }

        month += 3;
        fecha = new Date(year, month, day);
        fechasCuotas.push(fecha);

        i++;
      }
      break;
    default:
      console.log("error");
  }
  return fechasCuotas;
};

export default getFechasCuotas;
