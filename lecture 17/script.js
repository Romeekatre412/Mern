// Objects are the entities which are



/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
// this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} 
  players: [{ id: 1, scores: [10, 34, 80] }],
  display: function () 
  {
    for (let player of this.players)
      console.log(player.id + " --- " + player.scores.join(" "));
  },
  addPlayers: function (id) 
  {
    const newPlayer = {};
    newPlayer.id = id;
    newPlayer.scores = [];
    this.players.push(newPlayer);
  },
  addScore: function (id, score) 
  {
    for (let player of this.players) 
    {
    if (player.id === id) 
    {
        player.scores.push(score);
        return;
    }
    }
  },
  averageScore: function (id) 
  {
    for (let player of this.players) {
      if (player.id === id) {
        let sum = 0;
        for (let score of player.scores) sum += score;
        return sum / player?.scores?.length;
      }
    }
  },
  teamAverage: function () {
    let sum = 0;
    let numberOfScores = 0;
    for (let player of this.players) {
      for (let score of player.scores) sum += score;
      numberOfScores += player?.scores?.length;
    }

    return sum / numberOfScores;
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57

/// properties about keys in Objects
let obj1 = 
{
  age: 12,
  6: 90,
};

// by default all the keys are of string types, except keys of type integer.
console.log("age of obj", obj1[6]); 
console.log("age of obj", obj1["6"]); 
console.log("age of obj", obj1["age"]);

let obj2 = new Object();
obj2.name = "Harman";
obj2.class = 10;

console.log(obj2);

obj2 = { ...obj1 }; // ... (triple dot) spread operator
console.log(obj2);

let arr = [12, 10, 3, 19];
let arr2 = [arr]; 
let arr3 = [...arr]; 
console.log({ arr2, arr3 }); 

//in objects
let student1 = {
  age: 10,
  name: "Prashant",
};

let student2 = { student1 };
let student3 = { ...student1 };

console.log({ student2, student3 });

let studentPersonalDetails = {
  age: 12,
  name: "Rani",
};
let studentAcademicDetails = {
  marks: 130,
  grade: "A",
};

//merging two or more objects using spread operator
let studentDetails = {
  ...studentPersonalDetails,
  ...studentAcademicDetails,
};
console.log({ ...studentDetails });

/* issue with copying object with spread operators */

obj1 = {
  a: {
    b: {
      c: 3,
    },
  },
};

obj2 = { ...obj1 };
obj2.a.b.c = 12;
console.log({ obj2 });
console.log({ obj1 });

let student = {
  name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};

let studentCopy1 = { ...student };
studentCopy1.name = "copy";
console.log({ studentCopy1, student });

// using spread operator with objects: for one level it's deep copy for other nested levels, it's shallow copy

/* Another way of copying an object (shallow copy) */
let studentCopy2 = Object.assign({}, student);
console.log({ studentCopy2 });
//merging two or more objects using Object.assign() method
let studentDetails2 = Object.assign(
  {},
  studentPersonalDetails,
  studentAcademicDetails
);
console.log({ studentDetails2 });

/* deep copying */
let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));
console.log({ deepCopyOfObj1 });
deepCopyOfObj1.a.b.c = 100; 
console.log({ obj1 }); 
console.log({ deepCopyOfObj1 }); 
//converting student object to string
let objectInStringFormat = JSON.stringify(student);
console.log(objectInStringFormat);

//converting a object string to object
let stringToObj = JSON.parse(objectInStringFormat);
console.log({ stringToObj });

console.log(
  JSON.parse(
    `{"name":"Pratik Patil","standard":"10th","gender":"male","section":"C"}`
  )
);



function boundaryTraversal(m, n, matrix) {
  let result = [];

  if (m === 1) {
    result = matrix[0];
  } else if (n === 1) {
    for (let i = 0; i < m; i++) {
      result.push(matrix[i][0]);
    }
  } else {
    for (let j = 0; j < n; j++) result.push(matrix[0][j]); 
    for (let i = 1; i < m; i++) result.push(matrix[i][n - 1]); n
    for (let j = n - 2; j >= 0; j--) result.push(matrix[m - 1][j]); 
    for (let i = m - 2; i > 0; i--) result.push(matrix[i][0]); 
  }
  
  console.log(result.join('\n'));
}