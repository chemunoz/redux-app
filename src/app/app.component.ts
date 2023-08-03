import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state.interface';
import { decrementar, incrementar } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux-app';
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  public incrementar(): void {
    this.store.dispatch(incrementar());
  }

  public decrementar(): void {
    this.store.dispatch(decrementar());
  }

  public cambioContador(contador: number): void {
    this.contador = contador;
  }
}
