import DomainContract from "../../../Domain/DomainEntities/Contract";
import IContractRepository from "../../../Domain/Interfaces/Repositories/IContractRepository";
import { Connection } from "typeorm";
import Contract from "../Entities/Contract";

export default class ContractRepository implements IContractRepository {
  constructor(private connection: Connection) {}

  async createContract(contract: DomainContract): Promise<DomainContract> {
    const dbContract = new Contract();
    dbContract.address = contract.address;
    dbContract.email = contract.email;
    dbContract.name = contract.name;
    dbContract.pdfTemplateUrl = contract.pdfTemplateUrl;
    dbContract.phone = contract.phone;
    dbContract.rentAmount = contract.rentAmount;
    dbContract.uniqueIdentifer = contract.uniqueIdentifer;

    await this.connection.manager.save(dbContract);

    contract.contractId = dbContract.id;

    return contract;
  }
  async getContract(uniqueIdentifer: string): Promise<DomainContract> {
    const contract = await this.connection.manager.findOne(Contract, {
      where: {
        uniqueIdentifer: uniqueIdentifer,
      },
    });

    if (!contract) return null;

    return new DomainContract({
      address: contract.address,
      email: contract.email,
      name: contract.name,
      pdfTemplateUrl: contract.pdfTemplateUrl,
      phone: contract.phone,
      rentAmount: contract.rentAmount,
      uniqueIdentifer: contract.uniqueIdentifer,
      contractId: contract.id,
    });
  }
}
