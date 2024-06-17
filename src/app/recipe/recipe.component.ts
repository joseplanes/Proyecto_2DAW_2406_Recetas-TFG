import { Component,Inject } from '@angular/core';
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
export class RecipeComponent {

  recipe_id:string = sessionStorage.getItem('recipe_id') || '';
  recipe : any;

  constructor(private GastromicService: GastromicService,
    @Inject(AppComponent) private userViewRecipeComponent: UserViewRecipeComponent
  ) { 
    this.GastromicService.fetchRecipe(this.recipe_id);

   
  }

  ngOnInit() {
    this.getRecipe();
    
  }
  


  getRecipeID() {
    return this.recipe_id;
  }

  getRecipe() {
   return this.GastromicService.getRecipe();
  }
}
