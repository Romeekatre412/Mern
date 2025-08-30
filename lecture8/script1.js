
/* issues in repeating mode 
-too much work for developer
- chances of error
-unable to count the number of repetition
*/

/* to solve these issues , we can use loops */


console.log("HI");
console.log("HI");

let num=10
while(num>=0) {
        console.log(num);
    num--;
}
 
let nm=0;
while(nm<25){
    if(nm%2==0)
        console.log(nm);
    nm++;
}
// O(25/2)  or O(13)

for (let i=1; i<=10; i++)
{
    console.log("1");
}

// initialization
// condition
// Increment or decrement

let nuum=10;
for (i=1; i<=nuum ; i++)
{
    console.log(i);
}

// O(10) 

let n=50;
for(i=3;i<=n;i+=3)
{
    console.log(i);
}

// O(10) or O(20)

let nu=35;
let sq;
for(i=20;i<=nu;i++)
{
    sq=i*i;
   console.log(sq);
}


// TC ->  O(n) --> [Start +n - start]

let nmm=5;
for(i=1 ; i<=10 ;i++)
{
   console.log(nmm + "*" + i + "=" + nmm*i);
}


let nuim=100;
let add=0;
for(i=0;i<=nuim;i++)
{
    add=add+i;
}
console.log(add);


