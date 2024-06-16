import { Component, Input } from '@angular/core';
import { GastromicService } from '../../gastromic.service';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-user-view-recipe',
  standalone: true,
  imports: [],
  templateUrl: './user-view-recipe.component.html',
  styleUrl: './user-view-recipe.component.css'
})
export class UserViewRecipeComponent {

  @Input() recipes:any;

  constructor(
    private gastromicService: GastromicService
  ) 
  { 
    // this.gastromicService.fetchRecipes();

    // this.recipes = this.getRecipes();
    // console.log("RECIPESSSSSSS: ", this.getRecipes())
  }


  // getRecipes() {
  //   return this.gastromicService.getRecipes();
  // }


}
