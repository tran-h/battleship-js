const index = require("./ship.js");

let s = new index.Ship(5);

test("ship object creation", () => {
  expect(s).toEqual({
    length: 5,
    timesHit: 0,
    sunk: false,
  });
});

test("ship hit", () => {
  s.hit();
  expect(s.timesHit).toBe(1);
});

test("ship sunk", () => {
  s.hit(); //2
  s.hit(); //3
  s.hit(); //4
  s.hit(); //5
  expect(s.isSunk()).toBeTruthy();
});
