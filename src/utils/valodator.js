export const val = {
  checkIfArray(variable) {
    if (Array.isArray(variable)) {
      return variable;
    } else if (variable === null || variable === undefined || variable === "") {
      return [];
    } else {
      return [variable];
      // si la variable n'est pas null, undefined ou "",
      // nous la traitons comme un tableau avec un seul élément
    }
  },
  checkIntOrFloat(num) {
    const number = parseFloat(num);

    if (!isNaN(number) && Number.isFinite(number)) {
      return Number.isInteger(number) ? number : number.toFixed(2);
    } else {
      return 0;
    }
  },
};
