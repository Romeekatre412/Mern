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



