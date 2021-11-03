import isBisiesto from "./isBisiesto";

const getFechaPrimeraCuota = (obj) => {
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

  if (obj.fechaCuota1) {
    return obj.fechaCuota1;
  } else {
    let fechaCuota1;
    let diferencia;
    let fechaDesembolso = obj.fechaDesembolso;
    let month = fechaDesembolso.getMonth();
    let day = fechaDesembolso.getDate();
    let year = fechaDesembolso.getFullYear();

    let diapago1 = obj.diapago1;

    if (diapago1 > 28 && meses[fechaDesembolso.getMonth()] === "Febrero") {
      if (isBisiesto(year)) {
        diapago1 = 29;
      } else {
        diapago1 = 28;
      }
    } else if (
      (meses[fechaDesembolso.getMonth()] === "Abril" ||
        meses[fechaDesembolso.getMonth()] === "Junio" ||
        meses[fechaDesembolso.getMonth()] === "Septiembre" ||
        meses[fechaDesembolso.getMonth()] === "Noviembre") &&
      diapago1 === 31
    ) {
      diapago1 = 30;
    }

    switch (obj.formaPago) {
      case "semanal":
        if (obj.diapago1 === diaSemana[fechaDesembolso.getDay()]) {
          day += 7;
          fechaCuota1 = new Date(year, month, day);
        } else {
          while (obj.diapago1 !== diaSemana[fechaDesembolso.getDay()]) {
            day++;
            fechaDesembolso = new Date(year, month, day);
          }
          fechaCuota1 = new Date(year, month, day);
        }
        diferencia =
          (fechaCuota1.getTime() - obj.fechaDesembolso.getTime()) /
          (1000 * 60 * 60 * 24);
        if (diferencia <= 3) {
          day += 7;
          fechaCuota1 = new Date(year, month, day);
        }
        return fechaCuota1;
      case "quincenal":
        let diapago2 = obj.diapago2;
        if (diapago2 > 28 && meses[fechaDesembolso.getMonth()] === "Febrero") {
          if (isBisiesto(year)) {
            diapago2 = 29;
          } else {
            diapago2 = 28;
          }
        }

        if (day <= 7) {
          day = obj.diapago1;
          fechaCuota1 = new Date(year, month, day);
        } else if (day > 8 && day <= 21) {
          if (
            meses[fechaDesembolso.getMonth()] === "Abril" ||
            meses[fechaDesembolso.getMonth()] === "Junio" ||
            meses[fechaDesembolso.getMonth()] === "Septiembre" ||
            meses[fechaDesembolso.getMonth()] === "Noviembre"
          ) {
            diapago2--;
          }
          day = diapago2;
          fechaCuota1 = new Date(year, month, day);
        } else {
          month++;
          day = obj.diapago1;
          fechaCuota1 = new Date(year, month, day);
        }
        return fechaCuota1;
      case "mensual":
        if (day >= diapago1) {
          day = diapago1;
          month++;
          fechaCuota1 = new Date(year, month, day);
        } else {
          day = diapago1;
          fechaCuota1 = new Date(year, month, day);
        }

        diferencia =
          (fechaCuota1.getTime() - fechaDesembolso.getTime()) /
          (1000 * 60 * 60 * 24);

        if (diferencia <= 15) {
          month++;
          if (
            diapago1 === 31 &&
            (month === 3 || month === 5 || month === 8 || month === 10)
          ) {
            day = 30;
          } else if (diapago1 <= 31 && diapago1 >= 28 && month === 1) {
            if (isBisiesto(year)) {
              day = 29;
            } else {
              day = 28;
            }
          }
          fechaCuota1 = new Date(year, month, day);
        }
        return fechaCuota1;
      case "bimestral":
        if (day >= diapago1) {
          day = diapago1;
          month++;
          fechaCuota1 = new Date(year, month, day);
        } else {
          day = diapago1;
          fechaCuota1 = new Date(year, month, day);
        }

        diferencia =
          (fechaCuota1.getTime() - fechaDesembolso.getTime()) /
          (1000 * 60 * 60 * 24);

        if (diferencia <= 30) {
          month++;
          if (
            diapago1 === 31 &&
            (month === 3 || month === 5 || month === 8 || month === 10)
          ) {
            day = 30;
          } else if (diapago1 <= 31 && diapago1 >= 28 && month === 1) {
            if (isBisiesto(year)) {
              day = 29;
            } else {
              day = 28;
            }
          }
          fechaCuota1 = new Date(year, month, day);
        }
        return fechaCuota1;
      case "trimestral":
        if (day >= diapago1) {
          day = diapago1;
          month++;
          fechaCuota1 = new Date(year, month, day);
        } else {
          day = diapago1;
          fechaCuota1 = new Date(year, month, day);
        }

        diferencia =
          (fechaCuota1.getTime() - fechaDesembolso.getTime()) /
          (1000 * 60 * 60 * 24);

        if (diferencia <= 45) {
          month++;
          if (
            diapago1 === 31 &&
            (month === 3 || month === 5 || month === 8 || month === 10)
          ) {
            day = 30;
          } else if (diapago1 <= 31 && diapago1 >= 28 && month === 1) {
            if (isBisiesto(year)) {
              day = 29;
            } else {
              day = 28;
            }
          }
          fechaCuota1 = new Date(year, month, day);
        }
        return fechaCuota1;
      default:
        console.log("error en el objeto");
        return "error";
    }
  }
};

export default getFechaPrimeraCuota;
