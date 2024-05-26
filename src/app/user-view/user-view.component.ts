import { Component,  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalAccessProhibitedComponent } from '../modal-access-prohibited/modal-access-prohibited.component';
import { CommonModule } from '@angular/common';
import { UserViewRecipeComponent } from './user-view-recipe/user-view-recipe.component';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink, ModalAccessProhibitedComponent, CommonModule, UserViewRecipeComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  logged: boolean = false;
  myprofile: boolean = true;
  following: boolean = false;

  constructor() { }

  isLoged() {
    return this.logged == true ? true : false;
  }

  isFollowing(){
    return this.following == true ? 'Siguiendo' : 'Seguir';
  }

  isMyProfile(){
    return this.myprofile == true ? true : false;
  }
}
