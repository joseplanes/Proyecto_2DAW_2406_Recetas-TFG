import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule, RouterOutlet, Event } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { filter } from 'rxjs';
import { IStaticMethods } from 'preline/preline';
import { GastromicService } from './gastromic.service';
import { AuthService } from './auth.service';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, SignInComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  title = 'Recetas_TFG';
  isShowHeaderFooter = true;

  datosUsuario:any;

  constructor(private router: Router, private gastromic: GastromicService, private auth: AuthService) {
    // Suscribirse al evento NavigationEnd
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isShowHeaderFooter = true; // Mostrar el encabezado y pie de página cuando la ruta cambia
    });

    // this.datosUsuario = this.gastromic.getCurrentUser();

    if(!this.auth.isTokenExpired())
      this.gastromic.fetchCurrentUser();
  }

  // Necesario para que se cargue el JS de la plantilla de Preline
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }

  // Cuando ha termiado de cargar el DOM, lo establecemos a true
  // esto fixea que cuando cambias la pestaña, se muestre o no bien.
  ngAfterViewInit() {
    setTimeout(() => {
      this.isShowHeaderFooter = true;
    }, 0);
  }


}
