import User from "../DomainEntities/User";
import InvalidInputError from "../DomainErrors/InvalidInputError";
import IUserRepository from "../Interfaces/Repositories/IUserRepository";

export default class UserService {
  constructor(private UserRepository: IUserRepository) {}

  async getUser(username: string): Promise<User> {
    if (!username) {
      throw new InvalidInputError(
        "you must provide user name to enter the system",
        { username: ["user name is required"] }
      );
    }
    let user = await this.UserRepository.getUser(username);
    if (!user) {
      user = await this.UserRepository.createUser(username);
    }
    return user;
  }
}
