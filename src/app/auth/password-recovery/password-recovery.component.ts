import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css'
})
export class PasswordRecoveryComponent implements OnInit{
  constructor(private appComponent: AppComponent) { }


  ngOnInit(): void {
    // timeout para que se cambie el valor despues de que se haya renderizado el componente
    setTimeout(() => {
      this.appComponent.isShowHeaderFooter = false;
    }, 0);
  }
}
