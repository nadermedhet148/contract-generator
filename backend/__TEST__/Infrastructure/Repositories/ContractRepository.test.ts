import { createConnection , Connection } from "typeorm";
import Contract from "../../../src/Domain/DomainEntities/Contract";
import ContractRepository from "../../../src/Infrastructure/Database/Repositories/ContractRepository";
import DbContract from "../../../src/Infrastructure/Database/Entities/Contract";

describe('ContractRepository' , ()=>{

    let connection : Connection;
    let contractRepository : ContractRepository;

    beforeAll(async ()=>{
      connection = await createConnection({
        database: ':memory:',
        synchronize: true,
        type: 'sqlite',
        name: 'testing',
        entities: [
          'src/Infrastructure/Database/Entities/**/*.ts',
        ],
      });
      contractRepository = new ContractRepository(connection);
    })
    describe('createContract' , ()=>{

        it('should save domain contract data to the db' , async ()=>{
          const contract = await contractRepository.createContract(new Contract({
            userId : null,
            address : '',
            email : '',
            pdfTemplateUrl :'',
            phone : '',
            name : '',
            rentAmount : 10,
            uniqueIdentifer : 'test',
          }))
          const dbContract = await connection.manager.findOne(DbContract , contract.contractId)
          expect(dbContract.id).toBe(1);
          expect(dbContract.uniqueIdentifer).toBe('test');
        })


    })

    describe('getContract' , ()=>{

      it('should return null if uniqueIdentifer not related to any contract' , async ()=>{
        const contract = await contractRepository.getContract('test2')
        expect(contract).toBe(null);
      })

      it('should return contract domain entity if uniqueIdentifer  related to a contract' , async ()=>{
        const contract = await contractRepository.getContract('test')
        expect(contract).toBeInstanceOf(Contract);
        expect(contract.contractId).toBe(1);
      })


  })

  })