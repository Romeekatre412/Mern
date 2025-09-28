/* print all subarrays */

// function printSubarrays(arr)
// {
//     let n=arr.length;
//     for(i=0;i<n;i++)
//     {
//         let subarr=[];
//         for(j=i;j<n;j++)
//         {
//             subarr.push(arr[j]);
//             console.log(subarr.join(" "));
//         }
//     }
// }
// printSubarrays([1, 4, 5, 7, 3, 2]);

//OR

// function printSubarrays(arr)
// {
//     let n=arr.length;
//     for(i=0;i<n;i++)
//     {
//         let subarr=[];
//         let sum=0;
//         for(j=i;j<n;j++)
//         {
//             subarr.push(arr[j]);
//             sum+=arr[j];
//             console.log(subarr.join(" "),sum);
//         }
//     }
// }
// printSubarrays([1, 4, 5, 7, 3, 2]);

/////OR///////

// function printSubarrays(arr)
// {
//     let n=arr.length;
//     for(i=0;i<n;i++)
//     {
//         let sum=0;
//         for(j=i;j<n;j++)
//         {
//             sum+=arr[j];
//             console.log(sum);
//         }
//     }
// }
// printSubarrays([1, 4, 5, 7, 3, 2]);

// for  printing sum of all subarrays

function printSubarrays(arr)
{
    let n=arr.length;
    let allSubarraySum=0;5
    for(i=0;i<n;i++)
    {
        let subarr=[];
        let sum=0;
        for(j=i;j<n;j++)
        {
            subarr.push(arr[j]);
            sum+=arr[j];
            allSubarraySum+=sum;
            console.log(subarr.join(" "),sum);
        }
    }
    console.log({allSubarraySum});
}
printSubarrays([1, 4, 5, 7, 3, 2]);



/* write a function to print the subarray whose sum is target sum(=T)
input[1, 4, 5, 7, 3, 2],T=15
output: [5,7,3]   */

function findTargetSumSubarray(arr,T)
{
    let n=arr.length;
    for(i=0;i<n;i++)
    {
        let subarr=[];
        let sum=0;
        for(j=i;j<n;j++)
        {
            subarr.push(arr[j]);
            sum+=arr[j];
            if(sum==T)
            {
            return subarr;
            }
        }
    }
}
console.log(findTargetSumSubarray(arr,10));


// for(let i=0;i<3;i++)
// {
//     let str ="";
//     for(j=1;j<=5;j++)
//     {
//         str +=j+5*i+" ";
//         {
//             console.log(str);

//         }
//     }
// }



arr=[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];
console.log("Printing 2D array");
for(let i=0; i<arr.length;i++)
{
    str="";
    for(let j=0;j<arr[i].length;j++)
    {
        str+=arr[i][j] +" ";
    }
    console.log(str);
}


/* print the sum of each row*/

console.log("Printing sum of 2d array");
for(let i=0; i<arr.length;i++)
{
    let sum=0;
    str="";
    for(let j=0;j<arr[i].length;j++)
    {
        str+=arr[i][j] +" ";
        sum+=arr[i][j];
    }
    console.log(sum);
}

/* sum of all matirx */

console.log("Printing sum of all 2d array");
let sum=0;
for(let i=0; i<arr.length;i++)
{
    
    str="";
    for(let j=0;j<arr[i].length;j++)
    {
        str+=arr[i][j] +" ";
        sum+=arr[i][j];
    }
}
console.log(sum);


//print the [sum of 
// (product of elements of each even indexed-row)
arr=[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];
sum=0;
for(let i=0; i<arr.length;i++)
{
    if(i%2==1) continue;
    let rowProduct=1;
    for(let j=0;j<arr[i].length;j++)
    {
        rowProduct+= arr[i][j];
    }
    sum +=rowProduct;
}
console.log(sum);


// print the matrix columnwise
arr=[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];

for(let i=0; i<arr[0].length;i++)
{
    str="";
    for(let j=0;j<arr.length;j++)
    {
        str+=arr[j][i] +" ";
    }
    console.log(str);
}

//HW
/* print the sum of elements in odd columns */

arr=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function primaryDiagonal(arr){
    let n = arr.length;
    let primaryDiagonal;
    for(let i=0;i<n;i++)
    {
        primaryDiagonal.push(arr[i][i]);
    }
    return primaryDiagonal.join(" ");
}
primaryDiagonal(arr);


// function secondaryDiagonal(arr)
// {
//     let n=arr.length;
//     let secondaryDiagonal;
//     for(let i=0;i<n;i++)
//     {
//         secondaryDiagonal.push(arr(n-i-1));
//     }
//     return secondaryDiagonal.join(" ");
// }
// secondaryDiagonal(arr);


/* function to cheak if primary diagonal sum is odd or even */

// function primaryDiagonalsum(arr)
// {
    
//     let n=arr.length;
//     let sum=0;
//     for(let i=0;i<n;i++)
//     {
//         sum+ arr[i][i];
//     }
//     return sum%2==0?true:false;

// }
