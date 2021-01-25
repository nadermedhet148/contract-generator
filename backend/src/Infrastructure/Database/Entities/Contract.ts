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

  @Column({ type: "string" })
  pdfTemplateUrl: string;

  @Column({ type: "string" })
  name: string;

  @Column({ type: "string" })
  phone: string;

  @Column({ type: "string" })
  uniqueIdentifer: string;

  @Column({ type: "string" })
  email: string;

  @Column({ type: "string" })
  address: string;

  @Column({ type: "decimal" })
  rentAmount: number;

  @Column({ type: "bigint", nullable: false, name: "offer_id" })
  @ManyToOne(() => User, (user) => user.contracts)
  @JoinColumn({ name: "user_id" })
  user: User;
}
