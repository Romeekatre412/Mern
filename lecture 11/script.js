function welcomeGuest(name, place){
console.log("Hello" + name + "welocome to our" + place);
}
 welcomeGuest("Riya", "App");
 welcomeGuest("Pratik", "Website");
 welcomeGuest("Deep", "Office");

 function sum(a, b)
 {
    const c = a+b;
    return c;
 }

 const sum1= sum(1,4);
 const sum2= sum(13,9);
 const sum3= sum(2,10);
 console.log({sum1, sum2, sum3});



/* Write a function to find the greatest of two numbers */

function max(a,b)
{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}


function sum2( a=0, b=0)
{
    return a+b;
}


function calculateDays(issueDate)
{
    return 25 - issueDate;
}
console.log("Total fine" + );

function libraryFine(issuedDate = 0) {

  const daysOfIssuance = calculateDays(issuedDate);
  /* Method 1
  let fine = 0;
  if(daysOfIssuance > 10) {
    fine = (daysOfIssuance - 10) * 3;
  } 

  return fine; */

  return daysOfIssuance > 10 ? (daysOfIssuance - 10) * 3 : 0;
}

console.log("Total Fine: " + libraryFine(2)); //23 - 10 = 13 * 3 = 39
console.log("Total Fine: " + libraryFine(12)); //13 - 10 = 3 * 3 = 9
console.log("Total Fine: " + libraryFine(22)); //3 -> fine = 0

/* How console is handling different number of arguments??
console.log(1, 2, 3, 4, 4);
console.log(1);
console.log(); 
*/

/* Rest operator - combines all the values inside it and makes an array,
-  always comes at last position in functions params */
function sumN(a, b, ...c) {
  console.log(a, b, c);
}

sumN(1, 3, 1, 3);
