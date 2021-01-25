import { createConnection , Connection } from "typeorm";
import User from "../../../src/Domain/DomainEntities/User";
import {UserRepository} from "../../../src/Infrastructure/Database/Repositories/UserRepository";
import DbUser from "../../../src/Infrastructure/Database/Entities/User";

describe('UserRepository' , ()=>{

    let connection : Connection;
    let userRepository : UserRepository;

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
      userRepository = new UserRepository(connection);
    })
    describe('createUser' , ()=>{

        it('should save domain User data to the db' , async ()=>{
          const user = await userRepository.createUser('username')
          const dbUser = await connection.manager.findOne(DbUser , user.userId)
          expect(dbUser.id).toBe(1);
        })


    })

    describe('getUser' , ()=>{

      it('should return null if username not related to any User' , async ()=>{
        const user = await userRepository.getUser('test2')
        expect(user).toBe(null);
      })

      it('should return User domain entity if uniqueIdentifer  related to a User' , async ()=>{
        const user = await userRepository.getUser('username')
        expect(user).toBeInstanceOf(User);
        expect(user.userId).toBe(1);
      })


  })

  })