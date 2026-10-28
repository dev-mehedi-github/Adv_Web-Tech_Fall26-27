import { Table } from "typeorm";

export class CreateEmployeeTable1792219265476 {
    public async up(queryRunner: any): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employees",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy:"uuid",
                        default:"uuid_generate_v4()"
                    },
                    { 
                        name: "name", 
                        type: "varchar", 
                        isNullable: false 
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "age",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "yearsOfWorking",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP(6)"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP(6)",
                    },
                    
                ],
            }),
        );
    }

    public async down(queryRunner: any): Promise<void> {
        await queryRunner.dropTable("employees");
    }
}