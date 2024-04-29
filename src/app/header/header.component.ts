import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  auth = inject(AuthService);
  // name = JSON.parse(sessionStorage.getItem('user')!).name;
  // image = JSON.parse(sessionStorage.getItem('user')!).picture;
  // email = JSON.parse(sessionStorage.getItem('user')!).email;
  
  singOut(){
    sessionStorage.removeItem('user');
    this.auth.signOut();
  }
}
