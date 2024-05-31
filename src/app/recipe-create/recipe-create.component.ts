import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-recipe-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.css'
})
export class RecipeCreateComponent {
  dificultad: string = '';
    
}
