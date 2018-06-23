import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    {
    name: 'A new recipe',
    description: 'test recipe',
    imagePath: 'https://www.seriouseats.com/images/2015/12/20151210-stew-recipe-roundup-02.jpg'
    },
    new Recipe('A test recipe',
    'This is a simple test',
    'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // Returns exact copy of original array
  }
}
