import getTasaEfectiva from "./getTasaEfectiva";
import getTasaNominal from "./getTasaNominal";

const getTasaDiaria = (tasa, tipo) => {
  switch (tipo) {
    case "nominal":
      return getTasaNominal(tasa);
    default:
      return getTasaEfectiva(tasa);
  }
};

export default getTasaDiaria;
