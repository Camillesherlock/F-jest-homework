import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");
const username = "fakeUserName";
const password = "fakePassWord";
describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    // TODO feedback: comment的代码就删掉哈

    // let username="fakeUserName";
    // let password="fakePassWord";
    // register(username,password);
    // expect(axios.post).toHaveBeenCalled();
    register(username, password);

    expect(axios.post).toHaveBeenCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    await expect(register(username, password)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
