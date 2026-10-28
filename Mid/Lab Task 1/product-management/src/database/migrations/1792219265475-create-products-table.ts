import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1792219265475 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "products",
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
                        name: "category", 
                        type: "varchar", 
                        isNullable: false 
                    },
                    {
                        name: "price",
                        type: "numeric",
                        isNullable: false
                    },
                    { 
                        name: "quantity", 
                        type: "int", 
                        isNullable: false 
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP(6)",
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

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("products");
    }
}