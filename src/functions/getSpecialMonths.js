const getSpecialMonths = (obj1, obj2) => {
  const months = Object.keys(obj1);
  let pairs = [];

  if (obj2 === null) {
    for (let i = 0; i < months.length; i++) {
      if (obj1[months[i]] !== 1) {
        const mes = months[i];
        pairs.push([mes, obj1[months[i]]]);
      }
    }
  } else {
    for (let i = 0; i < months.length; i++) {
      if (obj1[months[i]] !== 1 || obj2[months[i]] !== 1) {
        const mes = months[i];
        pairs.push([mes, obj1[months[i]], obj2[months[i]]]);
      }
    }
  }

  return pairs;
};

export default getSpecialMonths;
