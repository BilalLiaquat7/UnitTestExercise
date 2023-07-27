const stringLength = require("./stringLength");

test("Sending Any name and getting count", () => {
  if (stringLength("Bilal") > 1 && stringLength("Bilal") < 10) {
    console.log("Passed");
  } else throw new error("Error"); // Throwing an error to fail the test case incase of failure
});
