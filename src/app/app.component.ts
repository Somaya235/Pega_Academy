import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FmissionComponent } from './fmission/fmission.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FmissionComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pega_Academy';
}
