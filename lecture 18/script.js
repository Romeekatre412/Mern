

// 



// str4[0] ="Y";
// console.log(str4);
// str4= "Y";
// console.log(str4);

// counting the number of words in below string

let words ="Hi how was your day";

let count=0;
for(let i=0;i< words.length; i++)
{
    if(words[i] === " ")
        count++;
}
console.log("Total words: ", ++count);


//methods in stringggg
console.log("baloon".includes('oon'));   // outout is truee

console.log("baloon".includes('ooN'));   /// this is case sensative so answer will be false

// replace
str="shoes";
console.log(str.replace("s","d")); 

// for doing replace all
str="shoes";
console.log(str.replaceAll("s","a"));


console.log("   romee katre ". trim());

//substring()
console.log("abhishek".substring(2));
console.log("abhishek".substring(2,6));
console.log("abhishek".substring(-2));
console.log("abhishek".substring(-2,6));
console.log("abhishek".substring(5,2));
console.log("abhishek".substring(5,-3));  // (0,5)


console.log("acciojob".slice(2));  // gives exactly 2 character from end
console.log("acciojob".slice(-2));  // gives exactly 2 character from end
console.log("acciojob".slice(4,-2));  // start from o and stop till 2nd index of last
console.log("acciojob".slice(-7,-2));  

console.log("abcd".repeat(4));

console.log("abcd".____proto___);
console.log("vscode".charAt(2));

//indexOf()
console.log("StringMethodsring".indexOf("ring"));
console.log("stringMethodring".indexOf("ring",7));

// tolowercase
console.log("aBcD".toLowerCase());

// for upper case
console.log("abcd".toUpperCase());

// hw   acciojob
// acc cci, cio, ioj, ojo, job

console.log();
