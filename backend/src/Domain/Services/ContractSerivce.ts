import Contract from "../DomainEntities/Contract";
import ContractNotFoundError from "../DomainErrors/ContractNotFoundError";
import PdfManger from "../Helpers/PdfManger";
import IContractRepository from "../Interfaces/Repositories/IContractRepository";
import IStorageManger from "../Interfaces/Storage/IStorageManger";
import * as validate from "validate.js";
import InvalidInputError from "../DomainErrors/InvalidInputError";
import FileShouldBePdfError from "../DomainErrors/FileShouldBePdfError";

export default class ContractService {
  constructor(
    private ContractRepository: IContractRepository,
    private pdfManger: PdfManger,
    private storageManger: IStorageManger
  ) {}

  async createContract(input: {
    name: string;
    phone: string;
    email: string;
    address: string;
    rentAmount: number;
    userId: number;
    buffer: Buffer;
    fileType : string;
  }): Promise<Contract> {
    const errors = validate(
      {
        name: input.name,
        phone: input.phone,
        email: input.email,
        address: input.address,
        rentAmount: input.rentAmount,
        userId: input.userId,
      },
      {
        name: {
          presence: true,
        },
        phone: {
          presence: true,
        },
        email: {
          presence: true,
        },
        address: {
          presence: true,
        },
        rentAmount: {
          presence: true,
          numericality: {
            greaterThan: 0,
          },
        },
        userId: {
          presence: true,
        },
      }
    );
    if (errors) {
      throw new InvalidInputError("your contract data is invalid", errors);
    }
    if(input.fileType !== 'application/pdf'){
      throw new FileShouldBePdfError();
    }
    const contractPdf = await this.pdfManger.generateContract(input.buffer, {
      name: input.name,
      phone: input.phone,
      email: input.email,
      address: input.address,
      rentAmount: input.rentAmount,
    });
    const uniqueIdentifer = Math.random().toString(36).substring(2);
    const contractPdfUrl = await this.storageManger.writeFile(
      contractPdf,
      uniqueIdentifer
    );
    const contract = new Contract({
      name: input.name,
      phone: input.phone,
      email: input.email,
      address: input.address,
      rentAmount: input.rentAmount,
      userId: input.userId,
      pdfTemplateUrl: contractPdfUrl,
      uniqueIdentifer,
    });
    
    return this.ContractRepository.createContract(contract);
  }
  async getContract(uniqueIdentifer: string): Promise<Contract> {
    const contract = await this.ContractRepository.getContract(uniqueIdentifer);
    if (!contract) {
      throw new ContractNotFoundError();
    }
    return contract;
  }
}
