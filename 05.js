// 5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
// Entrada -> [[7,3],[2,2],[1,0],[4,3]]
// Salida -> [[1,0],[2,2],[4,3],[7,3]]

const distanceToOrigin = ([x, y]) => Math.sqrt(x * x + y * y);

const sortByDistanceToOrigin = (points = []) => {
  const pointsWithDistances = points.map((point) => ({
    point,
    distance: distanceToOrigin(point),
  }));

  pointsWithDistances.sort((a, b) => a.distance - b.distance);

  const sortedPoints = pointsWithDistances.map(
    (pointWithDistance) => pointWithDistance.point
  );

  return sortedPoints;
};

console.log(
  sortByDistanceToOrigin([
    [7, 3],
    [2, 2],
    [1, 0],
    [4, 3],
  ])
);
