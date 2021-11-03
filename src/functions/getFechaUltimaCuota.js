const getFechaUltimaCuota = (date, unidad, plazo) => {
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();

  if (unidad === "meses") {
    month += plazo;
    return new Date(year, month, day);
  } else {
    year += plazo;
    return new Date(year, month, day);
  }
};

export default getFechaUltimaCuota;
