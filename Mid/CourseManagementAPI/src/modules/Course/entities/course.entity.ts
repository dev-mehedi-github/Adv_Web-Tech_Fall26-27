import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"courses"})
export class Course{
    @PrimaryGeneratedColumn("uuid")
    id !: string;

    @Column()
    name !: string;

    @Column()
    code !: string;

    @Column()
    credits !: number;

    @Column()
    instructor !: string;

    @Column()
    description ?: string;

    @Column()
    create_at?: Date;

    @Column()
    updated_at?: Date;

}