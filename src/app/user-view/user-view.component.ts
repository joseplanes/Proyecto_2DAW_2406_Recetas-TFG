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

  user:any;
  ngOnInit(): void {
    this.gastromicService.fetchCurrentUser();
    this.gastromicService.fetchRecipes();

    // console.log("GET CURRENT USER: " + this.getCurrentUser());
    // this.gastromicService.getCurrentUser();
    // this.gastromicService.fetchCurrentUser();
    // console.log("CURRENT USER: " + this.getCurrentUser())
    // this.user = {...this.gastromicService.getCurrentUser()}
  }




  constructor(
    private router: Router,
    private gastromicService : GastromicService
  ) 
  {
    
    // this.gastromicService.fetchFileById(this.getCurrentUser().avatar);

    console.log("GET RECIPES: ", this.getRecipes())
    // console.log("THIS USER: " + this.user[0].id)
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
    return this.gastromicService.getRecipes();
  }

  getFile() {
    return this.gastromicService.getFile();
  }

  setFileId(id:any) {
    this.gastromicService.fetchFileById(id);
  }

}
