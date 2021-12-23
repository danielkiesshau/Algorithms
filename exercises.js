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

// Quicksort
// Answer: [1,2,4,5,10,20]

const arrC = [5, 20, 4, 2, 1, 1, 10];

const quickStort = (arr) => {
  const isSorted = arr.length < 2;
  
  if (isSorted) return arr;
  
  const pivot = arr[0];
  const leftSubArrys = arr.filter((a) => a < pivot);
  const rightSubArrays = arr.filter((b) => b > pivot);

  return [...quickStort(leftSubArrys), pivot, ...quickStort(rightSubArrays)]
}

console.log(quickStort(arrC))

// Graph
// Answer: bob

const graph = {

}

graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

const mangoSellers = {
  "bob": "bob", 
  "jonny": "jonny" 
}


// breadh-first
function breadthFirst(startingNode, graph) {
  let checkedNode = null;
  let currentNode = startingNode;

  graph[startingNode].some(node => {
    checkedNode = mangoSellers[node];
    currentNode = node;

    return checkedNode;
  })

  return checkedNode || breadthFirst(currentNode, graph);
}

console.log(breadthFirst("you", graph));


function breadthFirstB(startingNode, graph) {  
  let checkedNode = null;
  let currentNode = startingNode;

  const queue = [currentNode];

  while (queue.length > 0) {
    currentNode = queue.shift();

    if (mangoSellers[currentNode]) {
      checkedNode = mangoSellers[currentNode];
      break;
    }

    graph[currentNode].forEach(node => {
      queue.push(node);
    })
  }

  return checkedNode || breadthFirst(currentNode, graph);
}

console.log(breadthFirstB("you", graph));
