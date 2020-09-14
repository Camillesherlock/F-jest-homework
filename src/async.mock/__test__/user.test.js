import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async() => {
    // TODO 19: add test here
    let username="fakeUserName";
    let password="fakePassWord";
    const result = register(username,password);
    await expect(result).resolves.toEqual({})
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    let username="fakeUserName";
    let password="fakePassWord";
    const result = register(username,password);
    await expect(result).rejects.toEqual("wrong username or password")
  });
});
