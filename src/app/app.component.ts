import { Component, VERSION } from '@angular/core';

import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HelloComponent, MenuComponent, ButtonComponent],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonLabel: string = 'ACESSAR';
  buttonSecond: string = 'ENTRAR';
}
