import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  duration: string;

  @IsString({ each: true })
  @IsNotEmpty()
  ingredients: string[];

  @IsString({ each: true })
  @IsNotEmpty()
  steps: string[];
}


export class UpdateRecipeDto extends PartialType(CreateRecipeDto) { }

