import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
import Contract from './Contract';
  
  @Entity('users')
  export default class User {
    @PrimaryGeneratedColumn()
    id: number;
  

  
  
    @Column({ type: 'string' })
    username;
  
    @OneToMany(
      () => Contract,
      contract => contract.user,
    )
    contracts: Contract[];

  }
  