import { Component, inject } from '@angular/core';
import { CardsRecetasComponent } from '../cards-recetas/cards-recetas.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsRecetasComponent ,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
