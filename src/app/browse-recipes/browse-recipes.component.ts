import { Component, inject } from '@angular/core';
import { CardsRecetasComponent } from '../cards-recetas/cards-recetas.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserViewRecipeComponent } from '../user-view/user-view-recipe/user-view-recipe.component';

@Component({
  selector: 'app-browse-recipes',
  standalone: true,
  imports: [CardsRecetasComponent ,RouterModule, UserViewRecipeComponent],
  templateUrl: './browse-recipes.component.html',
  styleUrl: './browse-recipes.component.css'
})
export class BrowseRecipesComponent {

}
