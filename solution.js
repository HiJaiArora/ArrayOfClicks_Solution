const fs = require("fs");

let resultJson = {};
let countGreaterThanTen = [];

function toCalculateCountMoreThanTen(clicks, value) {
  let occurrences = clicks.reduce(function (acc, curr) {
    return acc[curr["ip"]] ? ++acc[curr["ip"]] : (acc[curr["ip"]] = 1), acc;
  }, {});

  let greaterThanTen = Object.keys(occurrences).filter((item) => {
    return occurrences[item] > value;
  });
  return greaterThanTen;
}

function mostExpensiveClick(solution, clicks) {
  for (let i = 0; i < clicks.length; i++) {
    let a = new Date(clicks[i].timestamp);
    // To generate key value distinct pari on the basis of dates , time and hour
    let b = new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours());
    resultJson[b]
      ? resultJson[b].push(clicks[i])
      : (resultJson[b] = [clicks[i]]);
  }

  for (var prop in resultJson) {
    solution.push(
      resultJson[prop].reduce((prev, current) =>
        +prev.amount > +current.amount ? prev : current
      )
    );
  }

  return solution;
}

function validateClicks(solution, countGreaterThanTen) {
  solution = solution.filter((item) => {
    if (countGreaterThanTen.length) {
      for (let i = 0; i < countGreaterThanTen.length; i++) {
        if (item.ip === countGreaterThanTen[i]) {
          return;
        } else {
          return item;
        }
      }
    }
  });
  return solution;
}
// Read clicks.json file
fs.readFile("clicks.json", function (err, data) {
  let clicks = [];
  let solution = [];
  let finalSolution = [];

  // Check for errors
  if (err) throw err;
  // Converting to JSON
  clicks = JSON.parse(data);

  solution = mostExpensiveClick(solution, clicks);
  countGreaterThanTen = toCalculateCountMoreThanTen(clicks, 10);
  finalSolution = validateClicks(solution, countGreaterThanTen);

  fs.writeFile("result-set.json", JSON.stringify(finalSolution), (err) => {
    // Checking for errors
    if (err) throw err;
  });
  console.log("Solution prepared please view result-set.json"); // Success
});

module.exports = {
  toCalculateCountMoreThanTen,
  mostExpensiveClick,
  validateClicks,
};
