function calculateAverage(num1, num2, num3) {
  const total = num1 + num2 + num3;
  const average = total / 3;
  return average;
}


function factorial(n)
{
    let fact=1;
    for(let i=2;i<=n;i++)
    {
        fact=fact*i;
        
    }
    console.log(fact);
}

function nCr(n,r)
{
    let nFact = Factorial(n);
    let nrFact = factorial(n-r);
    let rFact = 
    let nCr = nFact/ (nFact * rFact);
    return ncr;
    return factorial(n)/factorial(n-r)* factorial(r));
}

function canVote( userAge, userName)
{
    if(userAge>=18)
    {
        console.log(userName + "is allowed to vote");
    }
    else
    {
        console.log(userName + "is not allowed to vote");
    }
    canVote("Ramesh",20);
    canVote("Riya",17);
}

const arr =[1,2,3,4,5,6,7,8];
n=arr.length;
let sum=sumOfArray(arr);
console.log({sum});

function sumOfArray(arr)
{
    let n=arr.length, sum=0;
    for(let i=0; i<n;i++)
    {
        sum +=arr[i];
    }
    return sum;
}


function evenOddDiff(arr)
{
    let n=arr.length;
    let evenSum = 0, oddSum=0;
    
    for(let i=0;i<n;i++)
    {
        if(arr[i]/2==0)
        {
            evenSum += ar[i];
        }
        else
        {
            oddSum += arr[i];
        }
        oddSum = sumOfArray(arr)- evenSum;
    return Math.abs(evenSum  - oddSum);
   }
   console.log("Absolute diffrence of Even and Odd elements:", evenOddDiff(arr));
}

arr = [2, 1, 5, 3, 6, 10, 15, 27, 45, 30];
function fizzBuzz(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) console.log("FizzBuzz");
    else if (arr[i] % 5 == 0) console.log("Buzz");
    else if (arr[i] % 3 == 0) console.log("Fizz");
    else console.log(arr[i]);
  }
}

fizzBuzz(arr);

arr = ["Rajat", "Dev", "Ram", "Sita"];
arr[0] = "Laxman";
console.log(arr);


arr = [1, 5, 6, 2, 1, 10];
arr[1] = 7;
console.log({ arr });


console.log("arr.push() return value: ", arr.push(15)); 


console.log("arr.unshift() return value: ", arr.unshift(-5));


console.log({ arr });


arr.pop(); 

arr.shift();


console.log("index of 10 in Array", arr.indexOf(10)); 
console.log("index of 10 in Array", arr.indexOf(15));


console.log("Last index of 1 in Arr:", arr.lastIndexOf(1));


console.log(arr.includes(6)); //returns true as 6 is present
console.log(arr.includes(17)); //returns false as 17 is not present

/* find and update the value of element = 10 to 14 using indexOf() and includes() methods*/

function updateValue(arr, oldValue, newValue) 
{
  if (arr.includes(oldValue)) {
    let oldValueIndex = arr.indexOf(oldValue);
    arr[oldValueIndex] = newValue;
    return true;
  } else return false;
}

if (updateValue(arr, 10, 14)) {
  console.log("Value has been updated");
} else console.log("Value is not updated");

console.log({ arr });