import { describe, expect, test } from "@jest/globals";
import User from "../../../src/Domain/DomainEntities/User";
import InvalidInputError from "../../../src/Domain/DomainErrors/InvalidInputError";
import UserService from "../../../src/Domain/Services/UserService";
import { UserRepository } from "../../../src/Infrastructure/Database/Repositories/UserRepository";

jest.mock("../../../src/Infrastructure/Database/Repositories/UserRepository");

describe("UserService", () => {
  const userRepository: jest.Mocked<UserRepository> = new UserRepository() as jest.Mocked<UserRepository>;
  let userService: UserService;
  beforeEach(() => {
    userService = new UserService(userRepository);
  });

  describe("createUser", () => {
    it("should throw InvalidInputError when username is empty", async () => {
      try {
        await userService.getUser(null);
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.message).toBe(
          "you must provide user name to enter the system"
        );
      }
    });
    it("should return user if username was related to a user ", async () => {
      userRepository.getUser.mockReturnValue(
        Promise.resolve(new User("name", 1, []))
      );

      const user = await userService.getUser("name");

      expect(user).toBeInstanceOf(User);
      expect(userRepository.getUser).toBeCalled();
    });
    it("should create new user if username was not related to any user", async () => {
      userRepository.getUser.mockReturnValue(Promise.resolve(null));
      userRepository.createUser.mockReturnValue(
        Promise.resolve(new User("name", 1, []))
      );

      const user = await userService.getUser("name");

      expect(user).toBeInstanceOf(User);
      expect(userRepository.getUser).toBeCalled();
      expect(userRepository.createUser).toBeCalled();
    });
  });
});
