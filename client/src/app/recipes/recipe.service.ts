import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken',
            'Perfect Roast Chicken', 
            'https://cdn.pixabay.com/photo/2021/08/15/07/56/chicken-6547126_960_720.png',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Spices', 20)
            ]),
        new Recipe(
            'Burger',
            'The best Burger have you ever eaten', 
            'https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419_960_720.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
      ];

      constructor(private slService: ShoppingListService) {
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
}