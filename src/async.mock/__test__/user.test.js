import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");
let username="fakeUserName";
let password="fakePassWord";
describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    // let username="fakeUserName";
    // let password="fakePassWord";
    // register(username,password);
    // expect(axios.post).toHaveBeenCalled();
    register(username,password);

    expect(axios.post).toHaveBeenCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    await expect(
    register(username,password)).rejects.toThrow("wrong username or password")
  });
  
});
