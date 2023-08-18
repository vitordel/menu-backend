import { Injectable } from '@nestjs/common';
import { CreateRecipeDto, UpdateRecipeDto } from '../core/dtos/recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from 'src/core/entities/recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>) { }

  async create(createRecipeDto: CreateRecipeDto) {
    return this.recipeRepository.save(createRecipeDto);
  }

  async findAll(): Promise<Recipe[]> {
    console.log('findAll');
    return await this.recipeRepository.find();
  }

  async findOne(id: number) {
    return await this.recipeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return await this.recipeRepository.update(id, updateRecipeDto);
  }

  async remove(id: number) {
    return await this.recipeRepository.delete(id);
  }


}
