import { Injectable } from '@angular/core';
import { AbstractControl,FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  error:string = '';

  setErrorMessage(error: string) {
    this.error = error;
    return this.error;
  }

  validateEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    if(!emailPattern.test(email)){
      this.setErrorMessage('Email invalido');
    }
    return isValid;
  }

  validatePasswords(password: string, confirmPassword: string) {
    const isValid = password === confirmPassword;
    if (!isValid) {
      this.setErrorMessage('Las contraseñas no coinciden');
    }
    return isValid;
  }

  validateTermsAndConditions(accepted: boolean) {
    if (!accepted) {
      this.setErrorMessage('Debes aceptar los términos y condiciones');
    }
    return accepted;
  }

  validatePasswordNotEmpty(password: string) {
    const isValid = password.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('La contraseña no puede estar vacía');
    }
    return isValid;
  }
}
