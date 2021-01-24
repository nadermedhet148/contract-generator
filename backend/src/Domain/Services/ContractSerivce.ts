import Contract from "../DomainEntities/Contract";
import ContractNotFoundError from "../DomainErrors/ContractNotFoundError";
import PdfManger from "../Helpers/PdfManger";
import IContractRepository from "../Interfaces/Repositories/IContractRepository";
import IStorageManger from "../Interfaces/Storage/IStorageManger";

export default class ContractService {
  constructor(
    private ContractRepository: IContractRepository,
    private pdfManger: PdfManger,
    private storageManger: IStorageManger
  ) {}

  async createContract(
    name: string,
    phone: string,
    number: string,
    email: string,
    address: string,
    rentAmount: number,
    userId: number
  ): Promise<Contract> {
    
    return null;
  }
  async getContract(uniqueIdentifer: string): Promise<Contract> {
    const contract = await this.ContractRepository.getContract(uniqueIdentifer);
    if(!contract){
      throw new ContractNotFoundError();
    }
    return contract;
  }
}
