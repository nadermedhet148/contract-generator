import { Connection } from "typeorm";
import DomainUser from "../../../Domain/DomainEntities/User";
import IUserRepository from "../../../Domain/Interfaces/Repositories/IUserRepository";
import User from "../Entities/User";
import DomainContract from "../../../Domain/DomainEntities/Contract";
import Contract from "../Entities/Contract";

export class UserRepository implements IUserRepository {
  constructor(private connection: Connection) {}

  async getUser(username: string): Promise<DomainUser> {
    const user = await this.connection.manager.findOne(User, {
      where: { username },
    });

    if (!user) return null;

    const contracts = await this.connection.manager.find(Contract, {
      where: {
        user: user.id,
      }
    });

    return new DomainUser(
      user.username,
      user.id,
      contracts.map(
        (contract) =>
          new DomainContract({
            address: contract.address,
            email: contract.email,
            name: contract.name,
            pdfTemplateUrl: contract.pdfTemplateUrl,
            phone: contract.phone,
            rentAmount: contract.rentAmount,
            uniqueIdentifer: contract.uniqueIdentifer,
            contractId: contract.id,
          })
      )
    );
  }
  async createUser(username: string): Promise<DomainUser> {
    const dbUser = new User();
    dbUser.username = username;
    await this.connection.manager.save(dbUser);

    return new DomainUser(dbUser.username, dbUser.id, []);
  }
}
