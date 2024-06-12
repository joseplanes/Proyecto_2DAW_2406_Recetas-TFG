import { Component, Inject } from '@angular/core';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-create',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.css'
})
export class RecipeCreateComponent {
  dificultad: string = '';
  ingredientes = [{ nombre: '', cantidad: '' }];
  pasos: string[] = [''];
  medida: string = '';

  recipeCreateForm = this.formBuilder.group({
    images: [''],
    name: '',
    description: '',
    category: '',
    serves:'',
    time: '',
    dificulty: '',
    ingredients: this.formBuilder.array([]),
    steps: [''],
  });
  
  constructor(private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   this.recipeCreateForm = this.formBuilder.group({
  //     images: [''],
  //     name: '',
  //     description: '',
  //     category: '',
  //     serves: '',
  //     time: '',
  //     dificulty: '',
  //     ingredients: this.formBuilder.array([
  //       this.formBuilder.group({ingredient: '', quantity: '', unit: ''})
  //     ]),
  //     steps: [''],
  //   });
  // }

  onSubmit() {
    console.log('Your form data : ', this.recipeCreateForm.value);
  }
  
  setDificultad(dificultad: string) {
      this.dificultad = this.dificultad === dificultad ? '' : dificultad;
      console.log(this.dificultad);
    }

  addIngrediente() {
    this.ingredientes.push({ nombre: '', cantidad: ' ' + this.medida });
    console.log(this.ingredientes);
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
  
 
