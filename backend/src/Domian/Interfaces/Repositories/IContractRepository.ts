import Contract from "../../DomainEntities/Contract";

export default interface IContractRepository {
    createContract(contract : Contract) : Promise<Contract>;
    getContract(id : number) : Promise<Contract>;
}