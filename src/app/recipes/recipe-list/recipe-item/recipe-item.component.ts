import { Component, OnInit, Input} from '@angular/core';
import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe() {
    // Call a property in our recipe service
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
