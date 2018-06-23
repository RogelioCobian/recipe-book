import { Recipe } from './recipe.model';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  selectedRecipe: Recipe;

  ngOnInit() {
  }

  displayRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
