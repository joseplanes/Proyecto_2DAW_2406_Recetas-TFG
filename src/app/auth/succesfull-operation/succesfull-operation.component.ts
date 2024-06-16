import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-succesfull-operation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './succesfull-operation.component.html',
})
export class SuccesfullOperationComponent {

  ngAfterViewInit(): void {
    // Oculto el header y footer
    setTimeout(() => {
      this.appComponent.isShowHeaderFooter = false;
    }, 0);
  }

  constructor(private router: Router, private appComponent: AppComponent) {
    setTimeout(() => {
      this.router.navigate(['']);
      setTimeout(() => {
        location.reload();
      }, 0);
    }, 3000);
  }

}
