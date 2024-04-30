import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-recetas',
  standalone: true,
  imports: [],
  templateUrl: './cards-recetas.component.html',
  styleUrl: './cards-recetas.component.css'
})
export class CardsRecetasComponent {
  likes = 10;
  save = false;
  logged = true;

  likeRecipe() { // Cambiar 1000 por los likes de la receta
    if(this.logged)
      this.likes === 10 ? (this.likes++, this.save = true) : (this.likes--, this.save = false);
  }

  // Sustituir por el estado de guardado de la receta al dar me gusta
  getSave(){
    return this.save;
  }

  isLogged() {
    return this.logged;
  }

  getLikes() { // Sustituir por los likes de la receta
    return this.likes;
  }
}
