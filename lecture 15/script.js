/* write a function to find the sum f all subarrays whose length is K
input A=[7,4,8,6,5], K=3
output:56

explanation : all subarray of size3 [7,4,8] , [4,6,8], [8,6,5] */



function allSubarraySum(arr,k)
{
    let n=arr.length;
    let allSubarraySum=0;
    for(i=0;i<n;i++)
    {
        let subarr=[];
        let sum=0;
        for(j=i;j<n;j++)
        {
            subarr.push(arr[j]);
            sum+=arr[j];
            if(subarr.length===k)
            {
                allSubarraySum+=sum;
            }
           
        }
    }
    return allSubarraySum;
}
let arr=[7,4,8,6,5];
let k=3;
console.log(allSubarraySum(arr,k));



/* continuing nesyted arrays */

const array1=[arr, 1,"85","rty",[2,[4,5]], 32];
    const array2= [
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
    ];

    console.log(array1[1][1]);
    console.log("cheaking if array1 is an array or not using Array.isArray() method",
        Array.isArray(array1)
    );

    if(Array.isArray(array1[4]))
    {
        if(Array.isArray(array1[4][1]))
        {
            console.log("Printing of 4", array1[4][1][0]);
        }
    }

/* cheak if array is a matrix or not*/

function isMatrix(arr)
{
    let firstrowLength = arr[0].length;
    for(let i=0;i<arr;i++)
    {
        if(arr[i],length != firstrowLength) return false;
    }
    return true;

}
console.log(isMatrix(array1));
console.log(isMatrix(array2));


// const OriginalArray=[3, 2, 4, 1, 9];
// function reverseArray()
// {
//     let n=arr.length;
//     for( let i=0;i< Math.floor(n/2); i++)
//     {
//         arr[]
//     }
//     reverseArray([3, 2, 4, 1, 9])
// }


/* Reverse each row  of a nested 2D array

input:[
     [1,2],
     [2, 3, 4, 5],
     [3, 4, 5, 6],
     ];

output: [
     [2, 1],
     [5, 4, 3, 2],
     [6, 5, 4, 3],
     ];
*/

function reverseRow(arr)
{
    let n=arr.length;
    for(let i=0;i<n; i++)
    {
        let m= arr[i].length;
        for(let j=0; j<Math.floor(m/2); j++)
        {
            [arr[i][j], arr[i][m-j-1]] = [arr[i][m-j-1] , arr[i][j]]
        }
    }
}


