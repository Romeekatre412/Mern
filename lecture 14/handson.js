
/// this is for printing all subarrays


function printSubarrays(arr)
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
            console.log(subarr.join(" "),sum);
        }
    }
}
printSubarrays([1, 4, 5, 7, 3, 2]);


/// printing of 2D arrays'


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


/////// print the sum of each row\

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

/// print the matrix column wiseee 
console.log("print the matrix column wiseee ");
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


// HW    print the sum of elements in odd columns 


console.log("print the sum of elements in odd columns ");
arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];

let oddColumnSum = 0;
for (let i = 0; i < arr[0].length; i++) 
    {
    if (i % 2 !== 0) {
        let currentColumnSum = 0;
        for (let j = 0; j < arr.length; j++) 
        {
            currentColumnSum += arr[j][i];
        }
        oddColumnSum += currentColumnSum;
    }
}
console.log(oddColumnSum);