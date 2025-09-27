/*

*****
****
***
**
*
*/

const rows = 5;

for (let i = rows; i >= 1; i--)
    {
        let pattern = '';
        for (let j = 1; j <= i; j++) 
        {
            pattern += '*';
        }
        console.log(pattern);
}

/*
1
1 2 
1 2 3 
1 2 3 4
1 2 3 4 5 
1 2 3 4 5 6
*/



for (let i = 1; i <= 6; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row.trim());
}