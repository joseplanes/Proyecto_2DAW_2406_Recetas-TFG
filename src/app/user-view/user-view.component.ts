import { Component, OnInit  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ModalAccessProhibitedComponent } from '../modal-access-prohibited/modal-access-prohibited.component';
import { CommonModule } from '@angular/common';
import { UserViewRecipeComponent } from './user-view-recipe/user-view-recipe.component';
import { RecipeCreateComponent } from '../recipe-create/recipe-create.component';
import { GastromicService } from '../gastromic.service';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink, ModalAccessProhibitedComponent, CommonModule, UserViewRecipeComponent, RecipeCreateComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit {
  logged: boolean = false;
  myprofile: boolean = true;
  following: boolean = false;
  tabSeleccionada = 'publicaciones';
  botonDeshabilitado = true;

  item:any;

  user:any;
  ngOnInit(): void {
    this.gastromicService.fetchCurrentUser();

    console.log("CURRENT USER: " + this.getCurrentUser())

  }


  constructor(
    private router: Router,
    private gastromicService : GastromicService
  ) 
  {
    this.gastromicService.fetchRecipes();
    this.gastromicService.fetchUserFollowers();
    this.gastromicService.getUserRecipes(this.getCurrentUser()?.id);

    console.log("USER VIEW RECIPES: ", this.getUserRecipes())
  }

  isLoged() {
    return this.logged == true ? true : false;
  }

  isFollowing(){
    return this.following == true ? 'Siguiendo' : 'Seguir';
  }

  isMyProfile(){
    return this.myprofile == true ? true : false;
  }

  cambiarContenido(tab: string) {
      this.tabSeleccionada = tab;
  }

  // Funcion que redirige a sign-in, de esta forma la opacidad del modal se quita
  onButtonClick() {
    setTimeout(() => {
      this.router.navigate(['/sign-in']);
    }, 0);
  }

  getCurrentUser() { 
    return this.gastromicService.getCurrentUser();
  }

  getRecipes() {


    let recipes = this.gastromicService.getRecipes();
  }

  getFile() {
    return this.gastromicService.getFile();
  }

  getUserAvatar() {
    return this.gastromicService.getUserAvatar();
  }

  getUserRecipes() {
    let contenedor = this.gastromicService.getUserRecipes(this.getCurrentUser()?.id);

    contenedor.user_recipes.forEach((e:any) => {
      e.avatar = this.gastromicService.getUserAvatarRecipe(this.getCurrentUser().avatar);
    });

    return contenedor;
  }

  getUserFollowers() {
    let followers = this.gastromicService.getUserFollowers();
    let counter = 0;
    followers?.forEach((e:any) => {
      if(e.user_id == this.getCurrentUser().id) {
        counter++;
      }
    });

    return counter;
  }

  getUsersFollowed() {
    let followed = this.gastromicService.getUserFollowers();
    let counter = 0;
    followed?.forEach((e:any) => {
      if(e.follower_id == this.getCurrentUser().id) {
        counter++;
      }
    });

    return counter;
  }
}
