import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.css'
})
export class RecipeCreateComponent {
  dificultad: string = '';
  ingredientes = [{ nombre: '', cantidad: '' }];
  pasos: string[] = [''];

  addIngrediente() {
    this.ingredientes.push({ nombre: '', cantidad: '' });
  }

  updateIngrediente(i: number, prop: 'nombre' | 'cantidad', event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
        this.ingredientes[i][prop] = target.value;
    }
  }
  addPasos(){
    this.pasos.push('');
    console.log(this.pasos);
  }
  updatePasos(i: number, event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
        this.pasos[i] = target.value;
    }
  }
  trackByIndex(index: number): number {
    return index;
  }

}


