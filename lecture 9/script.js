/* Program to find the factorial of N */
let N = 5;
let factorial = 1;

for(let i = 1; i <= N; i++){
  factorial *= i;
}

console.log({factorial});

/* Check if N is prime or not */
N = 117;
let divisorsCount = 0;

for(let i = 1; i <= N; i++){
  if(N % i == 0)
    divisorsCount ++;
}

const message = (divisorsCount > 2) ? "Non - prime number" : "Prime number";
console.log(N + " is a " + message);


const divisor = 17;
for(let i = 100; i <= 200; i++){
  if(i % divisor == 0){
    break;
  }
  console.log(i);
}


for(let i = 1; i <= 100; i++) {
  console.log(i);
  if(i % divisor == 0)
    continue;

  console.log(i**2);
}

/* Print all odd numbers from 1 to 200 that are divisible by 5 with the use continue*/
for(let i = 1; i <= 200; i++) {
  if(i%2 == 0 || i%5 != 0) 
    continue;
  
  console.log(i);
}

/* Print first 10 odd numbers from 1 to 200 that are divisible by 5 with use of ?*/
let count = 0;

for(let i = 1; i <= 200; i++) {
  if(i%2 == 0 || i%5 != 0) 
    continue;
  if(count == 10)
    break;
  count ++;
  console.log(i);
}

/* = Nested For Loops */

N = 10;
let M = 10;

// program to print 10 '*'
let starString = "";
for(let i = 0; i < N; i++)
  starString += "*";
console.log(starString);

//write a program to print 10 lines of (10 '*' in one line)
for(let i = 0; i < M; i++){
  let starString = "";
  for(let j = 0; j < N; j++)
    starString += "*";
  console.log(starString);
}



//STEP - 1: program to print 1 2 3 4 5 6
N=6;

let numString = "";
for(let i = 0; i < N; i++) {
  numString += i+1+ " ";
}
console.log(numString);

// STEP 2: write a for loop that runs 6 times and add STEP 1 inside this loop
M=6;

for(let i = 0; i < M; i++){
  let numString = "";
  for(let j = 0; j < N; j++) {
    numString += j+1+ " ";
  }
  console.log(numString);
}

/* H.W.
Print this pattern:

A.
*****
****
***
**
*


B. 
1
1 2 
1 2 3 
1 2 3 4
1 2 3 4 5 
1 2 3 4 5 6
*/

//DO WHILE LOOP



do {
  console.log("Hi, I'm do while loop!!");
} while (false);



let response;
let responseCounter = 0;
do {
  response = prompt("Do you want to continue? Count:" + responseCounter);
  console.log({response});
  responseCounter++;
} while (response == "Yes" || response == "yes");

/* similar code using while loop 
response = prompt("Do you want to continue? Count:" + responseCounter);

while (response == "Yes" || response == "yes"){
    response = prompt("Do you want to continue? Count:" + responseCounter);
    console.log({response});
    responseCounter++;
} */