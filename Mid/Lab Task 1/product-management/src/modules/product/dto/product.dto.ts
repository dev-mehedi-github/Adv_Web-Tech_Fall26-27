import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty({message:"Product Name is a mendatory Field"})
    name!:string;

    @IsNotEmpty()
    category!:string;

    @IsNotEmpty()
    price!:number;

    @IsNotEmpty()
    quantity!:number;

    @IsOptional()
    created_at?: Date = new Date();

    @IsOptional()
    updated_at?: Date = new Date();
}
export class UpdateProductDto{
    @IsNotEmpty()
    name!:string;

    @IsNotEmpty()
    category!:string;

    @IsNotEmpty()
    price!:number;

    @IsNotEmpty()
    quantity!:number;

    @IsOptional()
    created_at?: Date = new Date();

    @IsOptional()
    updated_at?: Date = new Date();
}