
/* hw check if values passed in slice() are negative 

slice(-1): Extracts the last element.
slice(-3): Extracts the last three elements.

let arr = [2, 10, 6, 4, 9];
arr.slice(-3) will return [6, 4, 9]
arr.slice(1, -1) will return [10, 6, 4]
*/

/* H.W -> How to concatenate multiple arrays? 

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let newArray = [arr1,arr2,arr3];
console.log(newArray);
// Output: [1, 2, 3, 4, 5, 6]

*/

// type of loops
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

for (let index in arr) {
  console.log(index);
}


/* swapping of two elements */
function swapArrElements(arr, index1, index2) 
{
  let n = arr.length;
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  console.log({ arr });
}
arr = [1, 2, 3, 4, 5];
swapArrElements(arr, 1, 4);

/* HW
Question: Given an array of consecutive numbers, but there's on number that's missing, find it
input: [1,2,3,5,6,7,8]
output: 4
*/

function findMissingNumber(arr)
{
    let n=arr.length +1;
    let sum=(n*(n+1))/2;  //find exp sum

    let originalSum=0;     // actual sum
    for(let i=0;i<arr.length;i++)
        {
            originalSum +=arr[i];
        } 
        return sum-originalSum;
}
    arr=[1,2,3,5,6,7,8];
    let missingNumber= findMissingNumber(arr);
    console.log({missingNumber});

