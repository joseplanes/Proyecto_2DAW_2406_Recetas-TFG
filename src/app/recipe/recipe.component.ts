import { Component } from '@angular/core';
import { GastromicService } from '../gastromic.service';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  constructor(private GastromicService: GastromicService) { 
    this.GastromicService.getCollections();
    this.GastromicService.getCurrentUser();
    this.GastromicService.getRecipe(1);
    

  }

  ngOnInit() {
    console.log(this.GastromicService.recipee());

  }
  
}
