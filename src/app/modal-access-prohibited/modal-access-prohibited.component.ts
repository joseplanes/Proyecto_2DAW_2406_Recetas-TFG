import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserViewComponent } from '../user-view/user-view.component';

@Component({
  selector: 'app-modal-access-prohibited',
  standalone: true,
  imports: [RouterLink, UserViewComponent],
  templateUrl: './modal-access-prohibited.component.html',
  styleUrl: './modal-access-prohibited.component.css'
})
export class ModalAccessProhibitedComponent {
  
  constructor() { }
}
