function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const merge = [...arr1,...arr2].sort();
  let result: number[] = [];
  for(let i = 0; i <  merge.length; i++) {
    if(merge[i] !== merge[i+1]) {
      result.push(merge[i])
    }
  }
  return result
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

// console.log(getUniqueNumbers(arr1, arr2));