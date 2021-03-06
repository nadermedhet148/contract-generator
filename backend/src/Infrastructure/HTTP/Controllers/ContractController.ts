import { createConnection, getConnection } from "typeorm";
import PdfManger from "../../../Domain/Helpers/PdfManger";
import ContractService from "../../../Domain/Services/ContractSerivce";
import { establishConnection } from "../../Database/connection/GetConnection";
import ContractRepository from "../../Database/Repositories/ContractRepository";
import LocalStorage from "../../FileStorage/LocalStorage";
import ErrorHandler from "./Handlers/ErrorHandler";
import SuccessHandler from "./Handlers/SuccessHandler";

export default class ContractController {
  constructor() {}

  async getContract(uniqueIdentifer: string) {
    try {
      const contractService = new ContractService(
        new ContractRepository(getConnection('default')),
        new PdfManger(),
        new LocalStorage()
      );
      return SuccessHandler(await contractService.getContract(uniqueIdentifer));
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
    buffer: Buffer, 
    type,
  ) {
    try {
      const contractService = new ContractService(
        new ContractRepository(getConnection('default')),
        new PdfManger(),
        new LocalStorage()
      );
      return SuccessHandler(
        await contractService.createContract({
          name,
          phone,
          email,
          address,
          rentAmount,
          userId,
          buffer ,
          fileType : type
        })
      );
    } catch (e) {
      return ErrorHandler(e);
    }
  }
}
