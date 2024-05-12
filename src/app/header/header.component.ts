import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = '';
  image: string = '';
  email: string = '';

  hideNav = true;

  constructor(private auth: AuthService, private router: Router) {
    let user = sessionStorage.getItem('user');
    if (user) {
      let parsedUser = JSON.parse(user);
      if (parsedUser) {
        this.name = parsedUser.name;
        this.image = parsedUser.picture;
        this.email = parsedUser.email;
      }
    }
  }

  getImageProfile(){
    return this.image;
  }
  
  signOut(){
    sessionStorage.removeItem('user');
    this.auth.signOut();
    location.reload();
  }

  // Comprueba si la ruta actual es la misma que la ruta pasada por parámetro
  // para activar la clase active en los lis
  isActive(route: string): boolean {
    return this.router.url === route;
  }


  toggleNav() {
    this.hideNav = !this.hideNav;
  } 
}
