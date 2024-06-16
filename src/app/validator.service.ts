import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl,FormGroup,FormControl  } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  error: string[] = [];

  setErrorMessage(error: string) {
    this.error.push(error); 
    return this.error;
  }

  clearErrors() {
    this.error = [];
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

  nombreIsEmpty(value: string) {
    const isValid = value.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('El campo nombre no puede estar vacío');
    }
    return isValid;
  }

  validateIsString(value: string) {
    const isValid = /^[^0-9]+$/.test(value);
    if (!isValid) {
      this.setErrorMessage('El campo no puede contener números');
    }
    return isValid;
  }

  
  categpryIsEmpy(category: string) {
    const isValid = category.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('Debe selecionar una categoria');
    }
    return isValid;
  }

  pasosIsEmpy(pasos: string) {
    const isValid = pasos.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('Debe agregar los pasos');
    }
    return isValid;
  }

  ingredientesIsEmpy(ingredientes: string) {
    const isValid = ingredientes.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('Debe agregar un ingredientes');
    }
    return isValid;
  }

  dificultadIsEmpy(dificultad: string) {
    const isValid = dificultad.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('Debe agregar una dificultad');
    }
    return isValid;
  }
  
  tiempoIsEmpy(tiempo: Time) {
    const isValid = tiempo !== null;
    if (!isValid) {
      this.setErrorMessage('Debe agregar un tiempo');
    }
    return isValid;
  }

  userNameIsEmpy(userName: string) {
    const isValid = userName.trim() !== '';
    if (!isValid) {
      this.setErrorMessage('Debe agregar un nombre de usuario');
    }
    return isValid;
  }

}
