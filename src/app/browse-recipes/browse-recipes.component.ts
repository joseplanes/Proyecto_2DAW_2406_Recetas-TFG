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
  // rating_recipes = this.getRatingRecipes();
  rating_recipes:any;

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
  


  constructor(private gastromicService: GastromicService){ 

    // this.gastromicService.fetchRecipes();
    // this.gastromicService.fetchRatingRecipes();


    // console.log("GET RECIPES: ", this.item)
    // console.log("GET RATING_RECIPES: ", this.getRatingRecipes())

    // this.item = this.getRecipes();

    // console.log("GET RECIPES: ",  this.getRecipes())
    this.rating_recipes = [];
    // this.init();
  }

  async ngOnInit(){
    await this.init();
    this.item = this.getRecipes();
    console.log("GET RECIPES: ", this.item)
    console.log("GET RATING_RECIPES: ", this.getRatingRecipes())
  }

  async init() {
    try {
        await this.gastromicService.fetchRecipes();
        this.rating_recipes = await this.gastromicService.fetchRatingRecipes();
    } catch (error) {
        console.error(error);
    }
  }

  openItem(id: string) {
    if (this.visibilidadElementos[id] === undefined) {
      this.visibilidadElementos[id] = true;
    } else {
      this.visibilidadElementos[id] = !this.visibilidadElementos[id];
    }
  }

  getRecipes() {
    let recipes = this.gastromicService.getRecipes();
    if (recipes && this.rating_recipes) {
        recipes.forEach((e: any) => {
            let likes = 0;
            this.rating_recipes.forEach((j: any) => {
                if (e.id == j.rating_recipes_id) { 
                    if (j.valuation == true) { 
                        likes++;
                        console.log("LIKES: ", likes)
                    }
                }
            });
            e.likes = likes;
        });
    }

    return recipes;
  }

  getRatingRecipes() {
    return this.gastromicService.getRatingRecipes();
  }
}
