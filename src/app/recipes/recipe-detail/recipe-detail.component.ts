import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  @Input() recipe: Recipe;

  ngOnInit() {
  }

  addToShoppingList() {
    // Call addIngredients method from shopping-list.service
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
