const { forEach, map } = require("./index");

const test = (desc, fn) => {
  console.log("---", desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test("forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });
  //console.log(sum);
  if (sum !== 7) {
    console.log(`expected 7 but got ${sum}`);
  }
});

test("map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  if (result[0] !== 2) {
    throw new Error(`expected 2 but got ${result[0]}`);
  }
  if (result[1] !== 4) {
    throw new Error(`expected 4 but got ${result[1]}`);
  }
  if (result[2] !== 6) {
    throw new Error(`expected 6 but got ${result[2]}`);
  }
});
