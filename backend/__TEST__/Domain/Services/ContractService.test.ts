import { describe, expect, test } from "@jest/globals";
import ContractNotFoundError from "../../../src/Domain/DomainErrors/ContractNotFoundError";
import PdfManger from "../../../src/Domain/Helpers/PdfManger";
import ContractService from "../../../src/Domain/Services/ContractSerivce";
import ContractRepository from "../../../src/Infrastructure/Database/Repositories/ContractRepository";
import LocalStorage from "../../../src/Infrastructure/FileStorage/LocalStorage";

jest.mock("../../../src/Infrastructure/Database/Repositories/ContractRepository");

describe("ContractService", () => {
  const contractRepository: jest.Mocked<ContractRepository> = new ContractRepository() as jest.Mocked<ContractRepository>;
  const pdfManger = new PdfManger();
  const storageManger = new LocalStorage();

  let contractService: ContractService;
  beforeEach(() => {
    contractService = new ContractService(contractRepository , pdfManger , storageManger );
  });

  describe("getContract", () => {
    it("should throw ContractNotFoundError if uniqueIdentifer not related to any contract",async () => {
      try {
        contractRepository.getContract.mockReturnValue(Promise.resolve(null));
        await contractService.getContract('test');
      } catch (e) {
        expect(e).toBeInstanceOf(ContractNotFoundError);
      }
    });
  });
});
