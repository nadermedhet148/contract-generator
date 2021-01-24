import Contract from "../../../Domain/DomainEntities/Contract";
import IContractRepository from "../../../Domain/Interfaces/Repositories/IContractRepository";

export default class ContractRepository implements IContractRepository{
    createContract(contract: Contract): Promise<Contract> {
        throw new Error("Method not implemented.");
    }
    getContract(uniqueIdentifer: string): Promise<Contract> {
        throw new Error("Method not implemented.");
    }
    
}