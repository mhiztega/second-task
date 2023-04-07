function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error('Vectors must have the same length');
  }
  let result = 0;
  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
}
function isOrthogonal(v1, v2) {
  return dot_product(v1, v2) === 0;
}

const v1 = [3, 4, 5];
const v2 = [7, 8, 9];
const v3 = [1, 0, -2];
const v4 = [2, 0, 1];

console.log(isOrthogonal(v1, v2));
console.log(isOrthogonal(v3, v4)); 