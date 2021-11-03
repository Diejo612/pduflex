const getValorCuota = (diferencias, tasa, prestamo, cuotas, vectores) => {
    const diferencia = diferencias[1];
    let denominador = 0;
    let exponente, base, termino;
    for (let i = 0; i < cuotas; i++) {
        exponente = diferencia[i] * -1;
        base = tasa + 1;
        termino = vectores[i] * Math.pow(base,exponente);
        denominador += termino;
    } 

    return prestamo / denominador;
}

export default getValorCuota;