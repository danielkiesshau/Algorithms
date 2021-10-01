const arr = [1, 2, 3, 4, 5]; 

// D&C (Recursive)
// Answer: 15
const sum = (arr, prevValue = 0) => {
  const [currValue, ...rest] = [...arr];
  const isFinalSum = rest.length === 0;

  if (isFinalSum) return prevValue + currValue;

  return sum(rest, currValue + prevValue)
};

console.log(sum(arr));


// Answer: 5
const findNumberOfItems = (arr, prevValue = 0) => {
  const isFinalCount = arr.length === 0;

  if (isFinalCount) return prevValue;

  const reducedArr = [...arr];
  
  reducedArr.pop();

  return findNumberOfItems(reducedArr, prevValue + 1)
}

console.log(findNumberOfItems(arr));

// Answer: 5
const findMaxnumber = (arr, prevValue = 0) => {
  const reducedArr = [...arr];
  const testedValue = reducedArr.pop();
  const isFinalCount = reducedArr.length === 0;
  const testedIsGreater = testedValue > prevValue;
  const maxValue = testedIsGreater
   ? testedValue 
   : prevValue;

  if (isFinalCount) return maxValue;

  return findMaxnumber(reducedArr, maxValue)
}

console.log(findMaxnumber(arr))


const arrB = [5, 3, 2, 4, 1, 10]; 

// BinarySearch + D&C
// Answer: 10
const findMaxnumberBinarySearch = (arr) => {
  const middleIndex = Math.floor((arr.length - 1) / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex + 1, arr.length);
  
  let maxValue = arr[middleIndex];

  const rightArrSearchFinished = rightArr.length === 0;

  if (!rightArrSearchFinished) {
    const rightMaxValue = findMaxnumberBinarySearch(rightArr);
    if (rightMaxValue > maxValue) maxValue = rightMaxValue; 
  }

  const leftArrSearchFinished = leftArr.length === 0;
  if (!leftArrSearchFinished) {
    const leftMaxValue = findMaxnumberBinarySearch(leftArr);
    if (leftMaxValue > maxValue) maxValue = leftMaxValue; 
  }

  return maxValue;
};



console.log(findMaxnumberBinarySearch(arrB))