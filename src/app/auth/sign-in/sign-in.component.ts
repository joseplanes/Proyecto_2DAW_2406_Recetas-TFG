declare var google: any;
import { Component,  Inject,  inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  // private router = inject(Router);
  signInForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router,
    @Inject(AppComponent) private appComponent: AppComponent
  ) {}

  ngAfterViewInit(): void {
    // Oculto el header y footer
    setTimeout(() => {
      this.appComponent.isShowHeaderFooter = false;
    }, 0);
  }


  ngOnInit(): void {
    // Inicializo la cuenta de google, el callback es la función que se ejecuta al loguearse
    google.accounts.id.initialize({
      client_id: '249396934092-clsig1b44dv940ml8469utkgesrf8ke9.apps.googleusercontent.com',
      callback: (resp: any) => {this.handleLogin(resp);}
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      type: "icon",
      shape: 'circle',
      border: 'none',
    });
  }


  signIn() {
    const email = this.signInForm.value.email as string;
    const password = this.signInForm.value.password as string
    this.authService.login(email, password);
    this.router.navigate(['sign-in/succesfull-operation']);
  }

  private decodeToken(token: string){ // Decodeo token JWT
    return JSON.parse(atob(token.split(".")[1]));
  }

  // Si se obtiene respuesta, se decodifica el token y se guarda en session storage
  handleLogin(response: any){
    if(response){
      const payLoad = this.decodeToken(response.credential); // Decodeo token
      sessionStorage.setItem('user', JSON.stringify(payLoad)); // Guardo en session localstorage
      this.router.navigate(['sign-in/succesfull-operation']); // Redirijo a home
    }
  }
}
