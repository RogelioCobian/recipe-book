import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('Recipe Selected', recipe);
    // Pass recipe to recipes component
    this.selectedRecipe.emit(recipe);
  }
}
