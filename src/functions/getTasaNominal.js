const getTasaNominal = (tasa) => {
  const tasaPorcentaje = tasa / 100;
  return tasaPorcentaje / 360;
};

export default getTasaNominal;
