import { Component, Inject } from '@angular/core';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastromicService } from '../gastromic.service';


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

  // recipeCreateForm = this.formBuilder.group({
  //   images: [''],
  //   name: '',
  //   description: '',
  //   category: '',
  //   serves:'',
  //   time: '',
  //   dificulty: '',
  //   ingredients: this.formBuilder.array([]),
  //   steps: [''],
  // });

  recipeCreateForm = this.formBuilder.group({
        images: [''],
        name: '',
        description: '',
        category: '',
        serves: '',
        time: '',
        dificulty: '',
        ingredient: '',
        quantity: '',
        unit: '',
        // ingredients: this.formBuilder.array([
        //   this.formBuilder.group({ingredient: '', quantity: '', unit: ''})
        // ]),
        steps: [''],
      });
  
  constructor(private formBuilder: FormBuilder, private gastromicService: GastromicService) { 
    this.gastromicService.fetchCategories();
    this.gastromicService.fetchIngredients();
  }

  // ngOnInit() {
  //   this.
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

  getIngredients() {
    return this.gastromicService.getIngredients();
  }

  getCategories() {
    return this.gastromicService.getCategories();
  }

  async createRecipe() {
    const title = this.recipeCreateForm.value.name as string;
    const description = this.recipeCreateForm.value.description as string;
    const category = this.recipeCreateForm.value.category as string
    const serves = this.recipeCreateForm.value.serves as string
    const time = this.recipeCreateForm.value.time as string
    const difficulty = this.recipeCreateForm.value.dificulty as string
    const ingredients = this.recipeCreateForm.value.ingredient as string
    // const password_confirm = this.recipeCreateForm.value.password_confirm as string

    let recipe = {
      title: title,
      description: description,
      categories: category,
      serves: serves,
      time: time,
      difficulty: difficulty,
      ingredients: ingredients,
    }

    // this.gastromicService.recipeCreated().id;

    let recipe_category = {
      recipes_id: this.gastromicService.recipeCreated().id,
      category_id: category
    }

    this.gastromicService.createRecipe(recipe);
    await this.gastromicService.createRecipe_Category(recipe_category); 

  }

  getOptionData(item:any): string {
    return JSON.stringify({
      description: item.name,
      icon: "<img class='inline-block rounded-full' src='https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80' />"
    });
  }

  // createRecipe(recipe:any) {
  //   this.gastromicService.createRecipe();
  // }

}
  
 
