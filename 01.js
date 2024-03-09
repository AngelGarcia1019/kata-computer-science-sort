// 1.- Crea una función que ordene de forma descendente un arreglo de números.
// Entrada -> [9,3,1,6,5,88,-1,2,7]
// Salida -> [88,9,7,6,5,3,1,-1]

const sortDescending = (nums) => {
  nums.sort((a, b) => b - a);
  return nums;
};

console.log(sortDescending([9, 3, 1, 6, 5, 88, -1, 2, 7]));
