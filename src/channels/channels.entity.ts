import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Channel {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   name: string;

   @Column()
   value: number;

   @Column({nullable: true})
   address: number;
}