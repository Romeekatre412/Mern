/// for for of loop question is important
for (let vehicle of vehicles) {
  if (vehicle?.address?.city === "Pune") 
    {
    vehicle.address.city = "Mumbai";
  }
}