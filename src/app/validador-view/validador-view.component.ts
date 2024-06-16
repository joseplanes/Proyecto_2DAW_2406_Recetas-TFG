import { Component } from '@angular/core';
import { ValidatorService } from '../validator.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-validador-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validador-view.component.html',
  styleUrl: './validador-view.component.css'
})
export class ValidadorViewComponent {

  constructor(private validatorService: ValidatorService) { }

  getErrorMessage() {
    return this.validatorService.error;
  }
}
