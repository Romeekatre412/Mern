// console.log(er6); // if the term is not initialized the we get er6 is not defined
//let er6=10;     // if the term is initialized after the console.log then it will give cannot access er6 before initialization

//////////////////////////////////
let x= 2*4+5/2;
console.log(x);

let y=3 * 4 + 30/6 * 5 ** 2;
console.log(y);

let z=3 + 3** 4 /3**2 - 3*4/6;
console.log(z);

const b=("123"+1) * 2**2-21/7;
console.log(b);

const c="123" + 5**5/25 **2/5;
console.log(c);
////////////////////////////////////////
// conditions 

let num=4;
if(num%2==0)
{
    console.log("even number");
}
else{
    console.log("odd number");
}


//////////////////////////////////
let numb=54;
if((numb/2)%2==0)
{
    console.log("even number");
}
else{
    console.log("odd number");
}
//////////////////////////////////////////
let k="12";
const j=12;
let m=12;
if(k==j)
{
    console.log("both a and b has same value");

}
if(j===m){
    console.log("both a and b has same value and datatype");
}

///////////////////////////////////////////


let age=20;
if(age>18  )
{
    console.log("you can vote");
}
else if(age<18)
{
    console.log("you cannot vote");
}

/////////////////////////////////////////

let d=75;
if(d>=80)
{
    console.log("A");
}
else if(d>=60)
{
  console.log("B");
}
else if(d>=40)
{
    console.log("C");
}
else{
    console.log("fail");}

//////////////////////////////////   

let agee=20;
let gender= "female";
if(agee>18 )
{
if(gender=="male")
    {
     console.log("mature boy");
    }
}
if(agee>21)
    {
      if(gender=="female")
      {
        console.log("mature girl");
      }
    } 
else{
    console.log("not mature");
}

///////////////////////////////

let ageee=20;
let gendeer= "female";
if(agee>18 && gender=="male"  )
{
     console.log("mature boy");
}
if(agee>18 && gender=="female")
      {
        console.log("mature girl");
      }
else{
    console.log("not mature");
}

////////////////////////////////////

let ticketno=11;
if(ticketno== 11 || ticket==101)
{
    console.log("winner");
}
else{
    console.log("loser");
}   


///////////////////////////////////

let loginIN = true;
let hassubscription = false;
if(loginIN==true && hassubscription==false)
{
    console.log("nneed to subscriber ")
}
else if(loginIN==true && hassubscription==true)
{  
    console.log("premium us")
}

//////////////////////////////

let nu=x;
if(nu!=17)
{
    console.log("good number");
}
else{
    console.log("not good number");
}

////////////////

let s,i;
let nuu=141;
s= Math.floor(nuu/100);
i= nuu%10;
if(s==i)
{
    console.log("palindrome");
}





////////////////////
let nn=12;
if(Math.floor(nn) == nn){
  console.log("int");
}
else
{
    console.log("decimal");
}

///////////////////
 
const nam1="suresh";
const nam2="Ramesh";
let marks1=40;
let marks2=30;
if(marks1>marks2)
{
    console.log(nam1, "has scored highest marks",marks1);
}
else
{
    console.log(nam2,"has highest marks ",marks2);
}

//////////////////////////////
 
let winnerName;
let winnerMarks;
if(marks1>marks2)
{
    winnerName = name1;
    winnerMarks = marks1;
}
else
{
    winnerName = name2;
    winnerMarks = marks2;
}
console.log(winnerName , "has scored highest marks ",winnerMarks);


//////////////////////////
