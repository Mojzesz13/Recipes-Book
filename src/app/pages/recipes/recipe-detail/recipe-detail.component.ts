import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input()  recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShopingList() {
    this.recipeService.onAddToShopingList(this.recipe.ingredients);
  }

}
