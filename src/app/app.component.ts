import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor() {
    this.contador = 10;
  }

  public incrementar(): void {
    this.contador++;
  }

  public decrementar(): void {
    this.contador--;
  }

  public cambioContador(contador: number): void {
    this.contador = contador;
  }
}
