// 2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
// Entrada -> ['b','h','w','e','a']
// Salida -> ['a','b','e','h','w']

const sortAscending = (charts) => {
  charts.sort();
  return charts;
};

console.log(sortAscending(["b", "h", "w", "e", "a"]));
