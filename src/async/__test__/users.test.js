// TODO feedback: 使用import就好了，不需要使用require

// const { default: getUsers } = require("../users");
import getUsers from "../users";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const result = getUsers();
    await expect(result).resolves.toEqual({});
  });
});
