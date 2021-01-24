import User from "../../../Domain/DomainEntities/User";
import IUserRepository from "../../../Domain/Interfaces/Repositories/IUserRepository";

export class UserRepository implements IUserRepository
 {
    getUser(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    createUser(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}