import { Component,Inject, OnInit } from '@angular/core';
import { GastromicService } from '../gastromic.service';
import { UserViewRecipeComponent } from '../user-view/user-view-recipe/user-view-recipe.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {

  recipe_id:string = sessionStorage.getItem('recipe_id') || '';
  recipe : any;
  prueba:any;

  constructor(
    private GastromicService: GastromicService,
    @Inject(AppComponent) private userViewRecipeComponent: UserViewRecipeComponent
  ) 
  { 
    this.GastromicService.fetchRecipe(this.recipe_id)
    this.GastromicService.fetchRatingRecipes();
    this.GastromicService.fetchUsers();

    
    this.GastromicService.fetchIngredients();
    this.GastromicService.fetchRecipesIngredients();
    this.GastromicService.fetchRecipesSteps();
    this.GastromicService.fetchRecipesComments();

    // this.GastromicService.fetchUserById()
  }

  ngOnInit() {
  }


  getRecipeID() {
    return this.recipe_id;
  }

  getRecipe() {
   return this.GastromicService.getRecipe();
  }

  getUserById(user_id:any) {

    // this.GastromicService.fetchUserById(user_id);
    
    return this.GastromicService.getUserById();
  }

  getRecipeIngredients() {
    return this.GastromicService.getRecipesIngredients();
  }

  getIngredients() {
    return this.GastromicService.getIngredients();
  }

  getRecipesSteps() {
    return this.GastromicService.getRecipesSteps();
  }

  getRecipesComments() {
    return this.GastromicService.getRecipesComments();
  }
}
