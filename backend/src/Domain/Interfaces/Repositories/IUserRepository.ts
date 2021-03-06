import User from "../../DomainEntities/User";

export default interface IUserRepository {
    getUser(username : string) : Promise<User>;
    createUser(username : string) : Promise<User>;
}