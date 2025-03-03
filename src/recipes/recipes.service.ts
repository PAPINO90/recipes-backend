import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.interface.';

import { v4 as uuidv4} from 'uuid';

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = []; 

    getRecipes(): Recipe[] {
        return this.recipes;

    }

    getRecipe(id: string): Recipe {
        return this.recipes.find((recipe) => recipe.id === id);


    }


    createRecipe(recipe: Recipe): Recipe{
        const newRecipe = { id: uuidv4(), ...recipe };
        this.recipes.push(newRecipe);
        return newRecipe;
    }
}
