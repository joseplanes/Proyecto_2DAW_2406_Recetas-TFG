declare var google: any;
import { Component,  OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    // Inicializo la cuenta de google, el callback es la función que se ejecuta al loguearse
    google.accounts.id.initialize({
      client_id: '249396934092-clsig1b44dv940ml8469utkgesrf8ke9.apps.googleusercontent.com',
      callback: (resp: any) => {this.handleLogin(resp);}
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      type: "icon",
      shape: 'circle',
    });
  }

  private decodeToken(token: string){ // Decodeo token JWT
    return JSON.parse(atob(token.split(".")[1]));
  }

  // Si se obtiene respuesta, se decodifica el token y se guarda en session storage
  handleLogin(response: any){
    if(response){
      const payLoad = this.decodeToken(response.credential); // Decodeo token
      sessionStorage.setItem('user', JSON.stringify(payLoad)); // Guardo en session localstorage
      this.router.navigate(['']); // Redirijo a home
    }
  }
}
