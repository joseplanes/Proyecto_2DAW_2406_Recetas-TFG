declare var google: any;
import { Component,  Inject,  inject , AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AppComponent } from '../../app.component';
import {ValidatorService} from '../../validator.service';
import {ValidadorViewComponent} from '../../validador-view/validador-view.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ValidadorViewComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  emailValue = '';
  // private router = inject(Router);
  error = false
  signInForm = this.formBuilder.group({
    email: '',
    password: ''
  }); 

  constructor(
    
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router,
    @Inject(AppComponent) private appComponent: AppComponent,
    private validatorService: ValidatorService
  ) {}


  ngAfterViewInit(): void {
    
    // Oculto el header y footer
    setTimeout(() => {
      this.appComponent.isShowHeaderFooter = false;
    }, 0);

    this.emailValue = localStorage.getItem('email') || '';
    if (this.signInForm && this.signInForm.get('email')) {
      this.signInForm?.get('email')?.setValue(this.emailValue);
    }

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
    this.validatorService.clearErrors();

    const email = this.signInForm.value.email as string;
    const password = this.signInForm.value.password as string

    let hasError = false;

    if(!this.validatorService.validateEmail(email)){
      hasError = true;
    }
  
    if(!this.validatorService.validatePasswordNotEmpty(password)){
      hasError = true;
    }

    
  
    if (hasError) {
      return this.setError();
    }

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

  onRememberMe(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      localStorage.setItem('email', this.signInForm.value.email as string);
    } else {
      localStorage.removeItem('email');
    }
  }

  setError(){
    this.error = true;
  }
}
