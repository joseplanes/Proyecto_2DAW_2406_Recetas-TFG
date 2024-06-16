import { Component } from '@angular/core';
import { GastromicService } from '../../gastromic.service';

@Component({
  selector: 'app-user-view-recipe',
  standalone: true,
  imports: [],
  templateUrl: './user-view-recipe.component.html',
  styleUrl: './user-view-recipe.component.css'
})
export class UserViewRecipeComponent {

  constructor(
    private gastromicService: GastromicService
  ) 
  { 
    this.gastromicService.fetchRecipes();
    console.log("RECIPESSSSSSS: ", this.getRecipes())
  }


  getRecipes() {
    return this.gastromicService.getRecipes();
  }


}
