import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CardsRecetasComponent } from '../cards-recetas/cards-recetas.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserViewRecipeComponent } from '../user-view/user-view-recipe/user-view-recipe.component';
import { CommonModule } from '@angular/common';
import { GastromicService } from '../gastromic.service';

@Component({
  selector: 'app-browse-recipes',
  standalone: true,
  imports: [CardsRecetasComponent ,RouterModule, UserViewRecipeComponent, CommonModule],
  templateUrl: './browse-recipes.component.html',
  styleUrl: './browse-recipes.component.css'
})
export class BrowseRecipesComponent implements AfterViewInit {
  item:any;


  private likes = 0;
  rating_recipes = this.getRatingRecipes();

  visibilidadElementos:any = {
    'principalesFiltros': true,
    'tiposDietas': false,
    'paises': false,
  };
  @ViewChild('iptSearch') iptSearch!: ElementRef;

  // Establece el foco en el input automaticamente
  ngAfterViewInit(): void {
    this.iptSearch.nativeElement.focus();
  }

  constructor(
    private gastromicService: GastromicService
  )
  { 

    this.gastromicService.fetchRecipes();
    this.gastromicService.fetchRatingRecipes();
    this.item = this.getRecipes();


    console.log("GET RECIPES: ", this.item)
    console.log("GET RATING_RECIPES: ", this.getRatingRecipes())

    this.item.forEach((e:any) => {
      
      this.rating_recipes.forEach((j:any) => {
        if(e.id == j.rating_recipes_id) {
          if(j.valuation == true) {
            this.likes++;
          }
          e.likes = this.likes.toString();
        }
        else {
          e.likes = "0";
        }
      });
    });
  }

  openItem(id: string) {
    if (this.visibilidadElementos[id] === undefined) {
      this.visibilidadElementos[id] = true;
    } else {
      this.visibilidadElementos[id] = !this.visibilidadElementos[id];
    }
  }

  getRecipes() {
    return this.gastromicService.getRecipes();
  }

  getRatingRecipes() {
    return this.gastromicService.getRatingRecipes();
  }
}
