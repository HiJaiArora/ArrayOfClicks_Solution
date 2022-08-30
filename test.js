const expect = require("chai").expect;
const {
  mostExpensiveClick,
  toCalculateCountMoreThanTen,
  validateClicks,
} = require("./solution");

let testingSample = [
  { ip: "22.22.22.22", timestamp: "3/11/2020 02:02:58", amount: 7.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 02:12:58", amount: 11.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 06:35:12", amount: 2.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 07:01:53", amount: 1.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 07:03:15", amount: 12.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 08:02:22", amount: 3.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 09:41:50", amount: 4.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 10:02:54", amount: 5.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 11:05:35", amount: 10.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 13:02:21", amount: 6.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 06:35:12", amount: 2.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 07:01:53", amount: 1.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 07:03:15", amount: 12.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 08:02:22", amount: 3.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 09:41:50", amount: 4.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 10:02:54", amount: 5.0 },
  { ip: "22.22.22.22", timestamp: "3/11/2020 11:05:35", amount: 10.0 },
  { ip: "55.55.55.55", timestamp: "3/11/2020 13:02:21", amount: 6.0 },
];
describe("Testing with chai", () => {
  beforeEach((done) => {
    done();
  });

  it("mostExpensiveClick should return desired array for testing sample", () => {
    expect(mostExpensiveClick([], testingSample.slice(0, 3))).to.eql(
      testingSample.slice(1, 3)
    );
  });

  it("validateClicks should return [] for sample input", () => {
    expect(validateClicks(testingSample.slice(1, 3), ["22.22.22.22"])).to.eql(
      []
    );
  });

  it("validateClicks should return desired array for testing sample input", () => {
    expect(validateClicks(testingSample, ["22.22.22.22"])).to.eql([
      { ip: "55.55.55.55", timestamp: "3/11/2020 13:02:21", amount: 6.0 },
    ]);
  });

  it(" toCalculateCountMoreThanTen  should return empty array for empty inputs", () => {
    expect(toCalculateCountMoreThanTen([], 10)).to.eql([]);
  });
  it("mostExpensiveClick should return '22.22.22.22' for testing sample  ", () => {
    expect(toCalculateCountMoreThanTen(testingSample, 10)).to.eql([
      "22.22.22.22",
    ]);
  });
});
