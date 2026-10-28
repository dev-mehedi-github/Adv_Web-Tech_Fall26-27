import { IsNotEmpty, Matches, IsOptional } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty({message:"Employee Name is a mandatory Field"})
    name!:string;

    @IsNotEmpty()
    email!:string;

    @IsNotEmpty()
    phone!:string;

    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.',})
    password!:string;

    @IsNotEmpty()
    age!:number;

    @IsNotEmpty()
    yearsOfWorking!:number;

    @IsOptional()
    created_at?: Date = new Date();
        
    @IsOptional()
    updated_at?: Date = new Date();

}
export class UpdateEmployeeDto {
    
    @IsNotEmpty()
    email!:string;

    @IsNotEmpty()
    phone!:string;

    @IsNotEmpty()
    password!:string;

    @IsNotEmpty()
    age!:number;

    @IsNotEmpty()
    yearsOfWorking!:number;

    @IsOptional()
    created_at?: Date = new Date();
        
    @IsOptional()
    updated_at?: Date = new Date();

}
