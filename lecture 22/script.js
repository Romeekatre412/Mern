console.log("Binary search");

function binarySearch(arr, target)
{
    let left=0;
    let right =arr.length-1;
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target)
        {
            return mid;
        }
        else if(arr[mid]<target)
        {
            left=mid+1;
        }
        else
        {
            right=mid-1;
        }
    }
    return -1;
}
let arr=[1,2,3,4,5,6,7,8];
console.log(binarySearch(arr,6));


console.log("first occurence");

function firstOccuence(arr, target)
{
    let left=0;
    let right =array.length-1;
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(array[mid]===target)
        {
            if(array[mid-1]!=target)
            {
            return mid;
            }
            else
            {
                left=mid+1;
            }
        }
        else if(array[mid]<target)
        {
            left=mid+1;
        }
        else
        {
            right=mid-1;
        }
    }
    return -1;
}
let array=[1,2,4,4,5,6,6,6,7];
let target=4;
console.log(firstOccuence(array,target));




console.log("String");

let arr1=["apple","banana","cherry","date"];
console.log(firstOccuence(arr1,"banana"));
console.log(firstOccuence(arr1,"fig"));

function firstOccuence(arr1,target)
{
    let left=0;
    let right=arr1.length-1;
     while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(arr1[mid]===target)
        {
            if(arr1[mid-1]!=target)
            {
            return mid;
            }
            else
            {
                left=mid+1;
            }
        }
        else if(arr1[mid]<target)
        {
            left=mid+1;
        }
        else
        {
            right=mid-1;
        }
    }
    return -1;
}

console.log("upperbound and lower bound")
let arr2=[1,2,4,4,5,6,7,8];
console.log()