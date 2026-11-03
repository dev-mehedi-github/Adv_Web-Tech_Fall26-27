import { IsInt, IsNotEmpty, IsOptional, IsString, Length, Matches, Max, Min } from "class-validator";

export class CreateCourseDto{
    @IsNotEmpty({message: "Course name is mandatory field"})
    @IsString()
    @Length(3, 50, {message: "Course name must be between 3 and 50 characters"})
    name !: string;

    @IsNotEmpty({message: "Course code is mandatory field"})
    @IsString()
    @Matches(/^[A-Z]{2,4}-?\d{3,4}$/, {message:'Course code must look like CS101 or MATH-201 (2–4 uppercase letters, optional dash, 3–4 digits).',})
    code !: string;

    @IsNotEmpty({ message: 'Credits is a mandatory field' })
    @IsInt({ message: 'Credits must be an integer' })
    @Min(1, { message: 'Credits must be at least 1' })
    @Max(3, { message: 'Credits cannot exceed 3' })
    credits !: number;

    @IsNotEmpty({ message: 'Instructor name is a mandatory field' })
    @IsString()
    instructor!: string;

    @IsOptional()
    description?: string;

    @IsOptional()
    create_at?: Date = new Date();
        
    @IsOptional()
    updated_at?: Date = new Date();

}
export class UpdateCourseDto{
    @IsNotEmpty()
    name !: string;

    @IsNotEmpty()
    code !: string;

    @IsNotEmpty()
    credits !: number;

    @IsNotEmpty()
    instructor!: string;

    @IsOptional()
    description?: string;

    @IsOptional()
    create_at?: Date = new Date();
        
    @IsOptional()
    updated_at?: Date = new Date();

}