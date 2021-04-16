import {EventEmitter, Injectable} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {ShoppingListService} from "../shoping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('testName1',
      'testDescription1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
      [
        new Ingredient(' browary', 2),
        new Ingredient(' vodeczk3', 5)
      ]),
    new Recipe('testName2', 'testDescription2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg', [
      new Ingredient(' browary', 2),
      new Ingredient(' vodeczk3', 5)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipe() {
    return this.recipes.slice();
  }

  onAddToShopingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
