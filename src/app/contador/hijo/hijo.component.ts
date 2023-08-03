import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.interface';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  public multiplicar(): void {
    this.store.dispatch(multiplicar({ numero: 2 }));
  }

  public dividir(): void {
    this.store.dispatch(dividir({ numero: 2 }));
  }
}
