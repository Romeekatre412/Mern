/// delete odd numbers

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
readline.on('line', line => {
  inputLines.push(line);
  if (inputLines.length === 2) {
    readline.close();
  }
});
readline.on('close', () => 
  {
  const arr = inputLines[1].split(' ').map(Number);
  const evenNumbers = arr.filter(number => number % 2 === 0);
  let output;
  if (evenNumbers.length === 0) 
  {
    output = -1;
  } 
  else 
  {
    output = evenNumbers.join(' ');
  }
  console.log(output);
});


///  question 4

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution{
  solve(inputLines) 
  {
  if (inputLines.length < 3) 
  {
    return; 
  }
  const arr = inputLines[2].trim().split(/\s+/).map(Number);
  if (arr.length <= 1) 
  {
    console.log("YES");
    return;
  }
  let isStrictlyIncreasing = true;
  for (let i = 0; i < arr.length - 1; i++) 
  {
  if (arr[i] >= arr[i + 1]) 
  {
    isStrictlyIncreasing = false;
    break;
  }
  }
  if (isStrictlyIncreasing) 
  {
  console.log("YES");
  } 
  else 
  {
    console.log("NO");
  }
  }
}

let inputarr = [];
rl.on("line", (line) => 
  {
    inputarr.push(line);
  });
rl.on("close", () => 
  {
    const solution = new Solution();
    solution.solve(inputarr);
});


/////  question 5   subarray problem 1

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ARRAY_SIZE = arr.length;

function solve(arr, n, s) 
{
  if (n > ARRAY_SIZE) 
  {
  console.log("NO");
  return;
  }
  let currentSum = 0;
  for (let i = 0; i < n; i++) 
    {
      currentSum += arr[i];
    }
    if (currentSum === s) 
    {
      console.log("YES");
      return;
    }
    for (let i = n; i < ARRAY_SIZE; i++) 
    {
      currentSum += arr[i];
      currentSum -= arr[i - n];
      if (currentSum === s) 
      {
        console.log("YES");
        return;
      }
    }
    console.log("NO");
}

rl.on('line', (input) => {
    let [n, s] = input.split(' ').map(Number);
    
    solve(arr, n, s);
    
    rl.close();
});
