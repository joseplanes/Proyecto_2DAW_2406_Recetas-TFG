import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CardsRecetasComponent } from '../cards-recetas/cards-recetas.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserViewRecipeComponent } from '../user-view/user-view-recipe/user-view-recipe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-recipes',
  standalone: true,
  imports: [CardsRecetasComponent ,RouterModule, UserViewRecipeComponent, CommonModule],
  templateUrl: './browse-recipes.component.html',
  styleUrl: './browse-recipes.component.css'
})
export class BrowseRecipesComponent implements AfterViewInit {
  listaVisible = true;
  @ViewChild('iptSearch') iptSearch!: ElementRef;

  // Establece el foco en el input automaticamente
  ngAfterViewInit(): void {
    this.iptSearch.nativeElement.focus();
  }

  manejarClic() {
    this.listaVisible = !this.listaVisible;
  }
}
