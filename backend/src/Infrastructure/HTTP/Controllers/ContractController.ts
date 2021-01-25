import { createConnection } from "typeorm";
import PdfManger from "../../../Domain/Helpers/PdfManger";
import ContractService from "../../../Domain/Services/ContractSerivce";
import ContractRepository from "../../Database/Repositories/ContractRepository";
import LocalStorage from "../../FileStorage/LocalStorage";
import ErrorHandler from "./Handlers/ErrorHandler";

export default class ContractController {
  constructor() {}

  async getContract(uniqueIdentifer: string) {
    try {
      const contractService = new ContractService(
        new ContractRepository(await createConnection()),
        new PdfManger(),
        new LocalStorage()
      );
      return await contractService.getContract(uniqueIdentifer);
    } catch (e) {
      return ErrorHandler(e);
    }
  }

  async createContract(
    name: string,
    phone: string,
    email: string,
    address: string,
    rentAmount: number,
    userId: number,
    pdfBuffer: Buffer
  ) {
    try {
      const contractService = new ContractService(
        new ContractRepository(await createConnection()),
        new PdfManger(),
        new LocalStorage()
      );
      return await contractService.createContract({
        name,
        phone,
        email,
        address,
        rentAmount,
        userId,
        pdfBuffer,
      });
    } catch (e) {
      return ErrorHandler(e);
    }
  }
}
