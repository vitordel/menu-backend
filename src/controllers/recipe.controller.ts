import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeService } from '../services/recipe.service';
import { CreateRecipeDto, UpdateRecipeDto } from '../core/dtos/recipe.dto';
import { Recipe } from 'src/core/entities/recipe.entity';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeService.remove(+id);
  }
}
