
//////////////////////
////// camel to snake case

function camelToSnakeCase(camelCase) {
  let n = camelCase.length;
  let snake_case = "";
  for (let i = 0; i < n; i++) {
    if (camelCase[i] === camelCase[i].toUpperCase()) {
      snake_case += "_" + camelCase[i].toLowerCase();
    } else snake_case += camelCase[i];
  }
  return snake_case;
}

console.log(camelToSnakeCase("camelCase"));

///////////////////////
/// snake to camelcase

function snakeToCamelCase(snake_case) {
  let n = snake_case.length;
  let camelCase = "";

  for (let i = 0; i < n; i++) {
    if (snake_case[i] === "_") {
      i++;
      camelCase += snake_case[i].toUpperCase();
    } else {
      camelCase += snake_case[i];
    }
  }

  return camelCase;
}
console.log(snakeToCamelCase("snake_case"));


////////////////

