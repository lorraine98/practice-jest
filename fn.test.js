const fn = require("./fn");

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("2 add 5 is 7", () => {
  expect(fn.add(2, 5)).toBe(7);
});
test("2 add 3 is not 7", () => {
  expect(fn.add(2, 3)).not.toBe(7);
});
test("return user object", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});
test("return user object", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    //fail
    name: "Mike",
    age: 30,
  });
});
test("null is null", () => {
  expect(null).toBeNull();
});
test("0 is falsy", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});
test("Max length of ID is 10", () => {
  const id = "helloWorld";
  expect(id.length).toBeLessThanOrEqual(10);
});
test("password length is 4", () => {
  const password = "1245";
  expect(password.length).toEqual(4); //tobe도 가능
});
test("0.1 add 0.2 is 0.3", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});
test("h is in Hello World", () => {
  expect("Hello World").toMatch(/h/i);
});
test("Mike is in User list", () => {
  const user = "Mike";
  const userList = ["Tom", "Jane", "Mike"];
  expect(userList).toContain(user);
});
test("check error message", () => {
  expect(() => fn.throwErr()).toThrow("error");
});
test("check age after 2 sec", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
test("check age resolve after 2 sec", async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});
