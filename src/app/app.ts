import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Pagina1, Pagina2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
