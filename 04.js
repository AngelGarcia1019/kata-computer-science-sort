// 4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
// Entrada -> ["adios","hola","maximo","uno","despedida"]
// Salida -> ["uno","hola","adios","maximo","despedida"]

const sortWordsByLengthAscending = (words) => {
  words.sort((a, b) => a.length - b.length);
  return words;
};

console.log(
  sortWordsByLengthAscending(["adios", "hola", "maximo", "uno", "despedida"])
);
