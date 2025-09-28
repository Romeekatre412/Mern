let mother = {
  name: "Priya Singh",
  age: 33,
  address: "Baner, Pune",
  city: "Pune",
};

let student = {
  name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};

mother.occupation = "Housewife";

console.log({ mother, student });
let arr = [1, 2, 3];
console.log(typeof arr); 

/* Create a vehicle object number of seats, top speed, mileage, number of airbags */
let vehicle1 = 
{
  noOfSeats: 7,
  topSpeed: 180,
  mileage: 40,
  noOfAirbags: 5,
};

vehicle1.noOfSeats = 4;

vehicle1.colors = ["white", "black", "grey"];

delete vehicle1.noOfAirbags;

/* nested objects */
vehicle1.address = {
  addressLine1: "Aria tower",
  addressLine2: "Baner",
  city: "Pune",
  state: "Maharashtra",
};

console.log({ vehicle: vehicle1 });
console.log("City of vehicle address:", vehicle1?.address?.city);
///  ? optional chaining
/// accessing a property that is not defined
console.log(vehicle1.name);

vehicle1.name = "Scorpio";

const vehicle2 = {
  name: "Thar",
  noOfSeats: 4,
  topSpeed: 180,
  mileage: 40,
  colors: ["white", "black", "grey"],
  address: {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
  },
};

//array of objects 
const vehicles = [vehicle1, vehicle2];
console.log({ vehicles });

//Question: print name of the vehicle and it's city from vehicles array
for (let i = 0; i < vehicles.length; i++) {
  console.log("Name of vehicle:", vehicles[i]?.name);
  console.log("Name of the city:", vehicles[i]?.address?.city);
}

console.log("vehicle1.name", vehicle1.name);
console.log('vehicle1["name"]', vehicle1["name"]);

// for .
console.log("Printing the vehicle1 object using for ... in loop");
for (let key in vehicle1) {
  console.log(key + ": " + vehicle1[key]);
}

// Object.keys(objName) gives the array of keys 
const vehicleObjKeys = Object.keys(vehicle1);
const addressObjKeys = Object.keys(vehicle1.address);
console.log({ vehicleObjKeys, addressObjKeys });

// Object.values(objName) gives the array of Values 
const vehicleObjValues = Object.values(vehicle1);
const addressObjValues = Object.values(vehicle1.address);
console.log({ vehicleObjValues, addressObjValues });

// for of loop in array of objects 
console.log("printing the array of objects using for ... of loop");
for (let value of vehicles) 
{
  console.log(value);
}

for (let vehicle of vehicles) {
  if (vehicle?.address?.city === "Pune") {
    vehicle.address.city = "Mumbai";
  }
}

let vehicle3 = {
  name: "XUV700",
  noseats: 7,
  topSpeed: 180,
  currentSpeed: 100,
  mileage: 40,
  colors: ["white","black","grey"],
  address: 
  {
    addressLine1: "Aria tower",
    addressLine2: "Banneer",
    city: "Pune",
    state: "Maharashtra",
  },
  isRunning: function () {
    if (this.currentSpeed > 0)
      console.log("XUV is running at speed " + this.currentSpeed);
    else console.log("XUV is not running");
  },
};

vehicle3.isRunning();
vehicle3.currentSpeed = 0;
vehicle3.isRunning();

