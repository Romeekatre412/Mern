const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => 
{
    const num = parseInt(n);
    const primes = [];
    for (let i = 2; i <= num; i++)
    {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++)
        {
            if (i % j === 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            primes.push(i);
        }
    }
    primes.forEach(prime => 
    {
        console.log(prime);
    });
    
    rl.close();
});
