import { describe, expect } from "@jest/globals";
import Contract from "../../../src/Domain/DomainEntities/Contract";
import ContractNotFoundError from "../../../src/Domain/DomainErrors/ContractNotFoundError";
import InvalidInputError from "../../../src/Domain/DomainErrors/InvalidInputError";
import PdfManger from "../../../src/Domain/Helpers/PdfManger";
import ContractService from "../../../src/Domain/Services/ContractSerivce";
import ContractRepository from "../../../src/Infrastructure/Database/Repositories/ContractRepository";
import LocalStorage from "../../../src/Infrastructure/FileStorage/LocalStorage";

jest.mock(
  "../../../src/Infrastructure/Database/Repositories/ContractRepository"
);
jest.mock("../../../src/Domain/Helpers/PdfManger");
jest.mock("../../../src/Infrastructure/FileStorage/LocalStorage");

describe("ContractService", () => {
  const contractRepository: jest.Mocked<ContractRepository> = new ContractRepository(null) as jest.Mocked<ContractRepository>;
  const pdfManger: jest.Mocked<PdfManger> = new PdfManger() as jest.Mocked<PdfManger>;
  const storageManger: jest.Mocked<LocalStorage> = new LocalStorage() as jest.Mocked<LocalStorage>;

  let contractService: ContractService;
  beforeEach(() => {
    contractService = new ContractService(
      contractRepository,
      pdfManger,
      storageManger
    );
  });

  describe("getContract", () => {
    it("should throw ContractNotFoundError if uniqueIdentifer not related to any contract", async () => {
      try {
        contractRepository.getContract.mockReturnValue(Promise.resolve(null));
        await contractService.getContract("test");
      } catch (e) {
        expect(e).toBeInstanceOf(ContractNotFoundError);
      }
    });
    it("should return Contract when uniqueIdentifer related to contract", async () => {
      contractRepository.getContract.mockReturnValue(
        Promise.resolve(
          new Contract({
            pdfTemplateUrl: "",
            name: "",
            phone: "",
            email: "",
            address: "",
            rentAmount: 1,
            userId: 1,
            uniqueIdentifer: "",
          })
        )
      );
      const result = await contractService.getContract("test");
      expect(result).toBeInstanceOf(Contract);
    });
  });

  describe("createContract", () => {
    it("should throw InvalidInputError if name is blank", async () => {
      try {
        await contractService.createContract({
          name: null,
          phone: "test",
          email: "test",
          address: "test",
          rentAmount: 1,
          userId: 1,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("name");
      }
    });
    it("should throw InvalidInputError if phone is blank", async () => {
      try {
        await contractService.createContract({
          name: "test",
          phone: null,
          email: "test",
          address: "test",
          rentAmount: 1,
          userId: 1,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("phone");
      }
    });
    it("should throw InvalidInputError if email is blank", async () => {
      try {
        await contractService.createContract({
          name: "test",
          phone: "test",
          email: null,
          address: "test",
          rentAmount: 1,
          userId: 1,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("email");
      }
    });
    it("should throw InvalidInputError if address is blank", async () => {
      try {
        await contractService.createContract({
          name: "test",
          phone: "test",
          email: "test",
          address: null,
          rentAmount: 1,
          userId: 1,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("address");
      }
    });
    it("should throw InvalidInputError if rentAmount is blank", async () => {
      try {
        await contractService.createContract({
          name: "test",
          phone: "test",
          email: "test",
          address: "test",
          rentAmount: null,
          userId: 1,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("rentAmount");
      }
    });
    it("should throw InvalidInputError if rentAmount less than 0", async () => {
      try {
        await contractService.createContract({
          name: "test",
          phone: "test",
          email: "test",
          address: "test",
          rentAmount: -2,
          userId: 1,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("rentAmount");
      }
    });
    it("should throw InvalidInputError if userId is blank", async () => {
      try {
        await contractService.createContract({
          name: "test",
          phone: "test",
          email: "test",
          address: "test",
          rentAmount: 1,
          userId: null,
          pdfBuffer: null,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidInputError);
        expect(e.error.errors).toHaveProperty("userId");
      }
    });
    it("should create contract and generate the pdf", async () => {
      contractRepository.createContract.mockReturnValue(
        Promise.resolve(
          new Contract({
            pdfTemplateUrl: "",
            name: "",
            phone: "",
            email: "",
            address: "",
            rentAmount: 1,
            userId: 1,
            uniqueIdentifer: "",
          })
        )
      );
      pdfManger.generateContract.mockReturnValue(
        Promise.resolve(new Buffer(""))
      );
      storageManger.writeFile.mockReturnValue(Promise.resolve("test"));

      const contract = await contractService.createContract({
        name: "test",
        phone: "test",
        email: "test",
        address: "test",
        rentAmount: 1,
        userId: 1,
        pdfBuffer: null,
      });
      expect(contract).toBeInstanceOf(Contract);
      expect(contractRepository.createContract).toBeCalled();
      expect(pdfManger.generateContract).toBeCalled();
      expect(storageManger.writeFile).toBeCalled();
    });
  });
});
