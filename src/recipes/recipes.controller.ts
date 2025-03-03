import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.interface';

import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
constructor(private readonly recipesService: RecipesService)
{}
@Get()
getRecipes(){
    return this.recipesService.getRecipes();
}



@Get(':id')
getRecipe(id: string) {
    return this.recipesService.createRecipe(id);

}



@Post()
createRecipe(@Body recipe: Recipe){
    return this.recipesService.createRecipe(recipe);

}

}
