import Contract from "../../DomainEntities/Contract";

export default interface IContractRepository {
    createContract(contract : Contract) : Promise<Contract>;
    getContract(uniqueIdentifer : string) : Promise<Contract>;
}