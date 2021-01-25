import { createConnection } from "typeorm";
import UserService from "../../../Domain/Services/UserService";
import { UserRepository } from "../../Database/Repositories/UserRepository";
import ErrorHandler from "./Handlers/ErrorHandler";
import SuccessHandler from "./Handlers/SuccessHandler";

export default class UserController {
    constructor( ){
    }

    async getUser(username: string) {
        try {
            const userService = new UserService(new UserRepository(await createConnection()))
            return SuccessHandler(await userService.getUser(username) )       
        } catch (e) {
            return ErrorHandler(e);
        }
    }
}