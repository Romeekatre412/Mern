//HW

// arr1 =[10, 12, 13, 7, 15]
// arr2 =[15, 17, 8, 6]
// arr =[...arr1, ...arr2];


const team = {
    name:"FOootball",

    players:[
        {id:1,
         score:[23,34,47]}
        ],

    addplayers:function(id){
        const newplayer={ id:id, score:[] }
        this.players.push(newplayer);
    },
    addscores:function(id,score){
    for(let value of this.players)
    {
      if(value.id==id){
      value.score.push(score);
      return;
    }
    }
}
}

team.addplayers(2);
team.addscores(2,10);
team.addscores(2,13);
console.log(team.players);


let obj1={
    age:55,
    2:12
}   

console.log("Age of Object:",obj1[5]);
console.log("Age of Object:",obj1["5"]);
//console.log("Age of Object:",obj1.5);/
// /This is because property names that are numeric (like 5) cannot be accessed using dot notation (obj.5).


let obj2=new Object();
obj2.name="Rahul";
obj2.age=32;

////////////////////////////////The spread operator (...) is used to copy all enumerable properties


let arr=[1,2,3,4,5];
let arr1=arr;
console.log(arr1);
let arr2={...arr};
//When spreading an array into an object, 
console.log(arr2);

let student1 = {
    age: 24,
    name: "sahil",
  };
  
  let student2 = { student1 };
  let student3 = { ...student1 };
  console.log({student2,student3})

  let bike1={
    name:"CBR",
    company:"HONDA",
  }

  let bike2={
    name:"GIXXER",
    company:"SUZUKI",
  };

  let vehicle={
    ...bike1,
    ...bike2,
  };
  console.log({ ...vehicle  })

  