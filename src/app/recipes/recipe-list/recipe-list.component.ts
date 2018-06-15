import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
    name: 'A new recipe',
    description: 'test recipe',
    imagePath: 'https://www.seriouseats.com/images/2015/12/20151210-stew-recipe-roundup-02.jpg'
    },
    new Recipe('A test recipe',
    'This is a simple test',
    'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('Recipe Selected', recipe);
    // Pass recipe to recipes component
    this.selectedRecipe.emit(recipe);
  }
}
