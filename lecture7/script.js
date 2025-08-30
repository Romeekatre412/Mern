///////////////////////////////
//-----------------TERNARY OPERATOR----------------//

const nummm=4;
nummm%2==0?
    console.log(nummm+ "is even"):
    console.log(nummm+ "odd");

//////////////////////
const nu1=3;
const isEvenorOdd = nu1%2==0? "Even" : "Odd";
console.log(nu1 + "is "+ isEvenorOdd);


//////////////////////
const numb=-4;
numb>=0?
    console.log(numb+ "is positive"):
    console.log(numb+ "is negative");

//////////////////////

const m2=3;
const isPosNegativeorZero =
m2>0 ? ("positive"):m2==0 ? "negative": "zero";
console.log(m2 +"is" + isPosNegativeorZero);


/// try all yesterday's question with ternary operator

//print the name of the highest scoring student using ternary operator
const nam1="harsh";
const nam2="punit";
let marks1=10;
let marks2=30;
(marks1>marks2)? console.log(nam1 +"has scored highest marks",marks1 ): console.log(nam2,"has scored highest marks", marks2);

//

///how we can find multiple statement ternary operator me explore krne bole true and false me 

//(cond)?  statement 1

///////////////////////////

const number1=10;
const number2=40;
const number3=25;
if(number1 >=number2 && number1>=number3)
{
    console.log("number 1 is greatesst")
}
else if(number2 >=number1 && number2>=number3)
{
    console.log("number 2 is greatesst")
}
else if(number3 >=number1 && number3>=number2)
{
    console.log("number 3 is greatesst")
}


///////  ||   ////////  do above in ternary
const num4=11;
const num5=15;
const num6=25;

let maxAmongThreNums =num4;
if(num4 >= num5 && num4 >=num6)
{
    maxAmongThreeNums=num4;
}
else if(num5 >= num4 && num5 >=num6)
{
    maxAmongThreeNums=num5;
}
else if(num6 >= num4 && num6 >=num5)
{
    maxAmongThreeNums=num6;
}


//////////  3 number ke liye max kaise find krenge    2 ke liye Math.max()


/*
print 1-7 into weekdays
1-> monday
2-> tuesday
3-> wednesday......
*/

/*const dayNumber=5;
(dayNumber==1)? console.log("monday"):
(dayNumber==2)? console.log("tuesday"):
(dayNumber==3)? console.log("wednesday"):
(dayNumber==4)? console.log("thursday"):
(dayNumber==5)? console.log("friday"):
(dayNumber==6)? console.log("saturday"):
(dayNumber==7)? console.log("sunday"):

*/

// switch

switch(4){
    case 1: console.log("monday");
    break;
    case 2: console.log("Tuesday");
    break;
     case 3: console.log("wednesday");
    break;
    case 4: console.log("Thursday");
    break;
     case 5: console.log("friday");
    break;
    case 6: console.log("saturday");
    break;
     case 7: console.log("sunday");
    break;
    default: console.log("invalid number");
    
}


/////////
const d=75
switch(true){
    case d>80 : console.log("A");
    break;
    case d>60: console.log("B");
    break;
     case d>=50 : console.log("C");
    break;
    case d>=40: console.log("D");
    break;
     default: console.log("E");

}

