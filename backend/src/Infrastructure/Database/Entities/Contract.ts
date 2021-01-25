import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import User from "./User";

@Entity("contracts")
export default class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  pdfTemplateUrl: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "varchar" })
  uniqueIdentifer: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "decimal" })
  rentAmount: number;

  @Column({ type: "bigint", nullable: true, name: "user_id" })
  @ManyToOne(() => User, (user) => user.contracts)
  @JoinColumn({ name: "user_id" })
  user: User;
}
