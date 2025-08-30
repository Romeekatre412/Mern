let x ="Hi how are you";
x=20;
x= false;

let a=10, 
b=20;

c= a+b;
console.log("sum of a and b:", c);

c = b-a;
console.log("a* b =" + c);

c= b/a;
console.log("b/a =" +c);

c= a%b;
console.log("a%b =", c);

const minutes = 24;
const seconds = minutes * 60;
console.log("24 minutes has:", seconds, "seconds");

const number1= 234;
const lastDigit = number1 %10;
console.log("last digit of ", number1, "is" , lastDigit);

const number = 234;

const num= "123";
const str ="abc";
let result;

result = num*2;
console.log(result);

result = str*2;
console.log(result);

result =num+2;
console.log(result);

let numb = 234 ;
const lastdigit = numb%10;
const removelastdigt = Math.floor(numb/10);
const seconddigit = removelastdigt%10;
const removesecondlastdigt =Math.floor(removelastdigt/10);
const firstdigit = removesecondlastdigt%10;
console.log ("last digit of ", numb, "is", lastdigit);
console.log ("second digit of ", numb , "is", seconddigit);
console.log ("first digit of ", numb , "is", firstdigit);
console.log("reverse digit", lastdigit,seconddigit,firstdigit);
