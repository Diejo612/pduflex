const getVectoresNormales = (cuotas) => { 

    let vectoresNormales = [];

    for(let i = 0; i < cuotas; i++){
        vectoresNormales.push(1);
    }

    return vectoresNormales;
}

export default getVectoresNormales;