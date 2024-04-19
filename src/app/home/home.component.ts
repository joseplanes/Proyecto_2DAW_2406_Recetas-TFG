import { Component } from '@angular/core';
import { CardsRecetasComponent } from '../cards-recetas/cards-recetas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsRecetasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
