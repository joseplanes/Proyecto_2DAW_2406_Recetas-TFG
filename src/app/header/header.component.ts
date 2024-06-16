import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { GastromicService } from '../gastromic.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = '';
  image: string = '';
  email: string = '';
  logged: boolean = false;

  userinfo: any;

  hideNav = true;

  constructor(private auth: AuthService, private router: Router, private gastromic: GastromicService) {
    let user = sessionStorage.getItem('user');
    if (user) {
      let parsedUser = JSON.parse(user);    
      if (parsedUser) {
        this.name = parsedUser.name;
        this.image = parsedUser.picture;
        this.email = parsedUser.email;
        this.logged = true;
      }
    }
  }

  // Me traigo la información del usuario
  ngOnInit() {
    this.userinfo = this.gastromic.getCurrentUser();
    console.log(this.userinfo);
  }

  
  getImageProfile(){
    console.log(this.image);
    return this.image;
  }
  
  signOut(){
    sessionStorage.removeItem('user');
    this.auth.logOut();
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

  isAuthenticated() {
    return this.logged || !this.auth.isTokenExpired();
  }

  getCurrentUser() {
    return this.gastromic.getCurrentUser();
  }

  getUserAvatar() {
    return this.gastromic.getUserAvatar();
  }
}
