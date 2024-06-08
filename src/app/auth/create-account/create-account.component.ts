import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AppComponent } from '../../app.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  accountCreationForm = this.formBuilder.group({
    username: '',
    email: '',
    password: '',
    password_confirm: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    @Inject(AppComponent) private appComponent: AppComponent
  )
  {}

  ngAfterViewInit(): void {
    // Oculto el header y footer
    setTimeout(() => {
      this.appComponent.isShowHeaderFooter = false;
    }, 0);
  }

  async createAccount(){
    const username = this.accountCreationForm.value.username as string;
    const email = this.accountCreationForm.value.email as string;
    const password = this.accountCreationForm.value.password as string
    const password_confirm = this.accountCreationForm.value.password_confirm as string

    if(password == password_confirm) {
      let userObject = {
        username: username,
        email: email,
        password: password,
      }

      this.authService.createAccount(userObject);
      this.router.navigate(['sign-in/succesfull-operation']);
    }
    else {
      console.log("ERROR AL CREAR LA CUENTA")
    }

  }

}
