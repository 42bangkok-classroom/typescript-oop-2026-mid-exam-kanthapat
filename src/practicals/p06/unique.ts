export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const merge = [...arr1,...arr2];
  const remove = merge.filter((i,j) => merge.indexOf(i) !== j)

  let result = [...arr1,...arr2];
  for(let j = 0; j < 2;j++) {
    for(let i = 0; i < remove.length; i++) {
      result.splice(result.indexOf(remove[i]), 1);
    }
  }
  
  return  result;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
// getUniqueNumbers(arr1, arr2)
console.log(getUniqueNumbers(arr1, arr2));