const capitalize = require("./capitalize");

test("Capitalize string", () => {
  expect(capitalize("hello")).toBe("HELLO");
});
