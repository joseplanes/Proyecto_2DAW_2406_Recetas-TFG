import { Component, Inject, inject } from '@angular/core';
import { CardsRecetasComponent } from '../cards-recetas/cards-recetas.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsRecetasComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    @Inject(AppComponent) private appComponent: AppComponent, private ngZone: NgZone
  ) { }
  ngAfterViewInit(): void {
    this.ngZone.run(() => {
      setTimeout(() => {
        this.appComponent.isShowHeaderFooter = true;
      }, 0);
    });
  }

  // ngOnInit(): void {
  //   this.ngZone.run(() => {
  //     setTimeout(() => {
  //       this.appComponent.isShowHeaderFooter = true;
  //     }, 0);
  //   });
  // }
}
