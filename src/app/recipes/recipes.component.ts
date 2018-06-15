import { Recipe } from './recipe.model';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
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
