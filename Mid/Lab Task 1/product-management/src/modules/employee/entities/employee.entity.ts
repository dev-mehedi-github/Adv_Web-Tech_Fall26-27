import { IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:"employees" })
export class Employee{
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    name!:string;

    @Column()
    email!:string;

    @Column()
    phone!:string;

    @Column()
    password!:string;

    @Column()
    age!:number;

    @Column({ name: 'yearsOfWorking' })
    yearsOfWorking!:number;
    
    @Column()
    created_at?: Date= new Date();

    @Column()
    updated_at?: Date= new Date();


}