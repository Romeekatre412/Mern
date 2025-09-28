// factorial 

function factorial(n)
{
    let fact=1;
    for(let i=2;i<=n;i++)
    {
        fact=fact*i;
        
    }
    console.log(fact);
}



// for voting


function canVote( userAge, userName)  // we need to make function of the useAge sndf Uderensame
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