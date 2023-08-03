import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.interface';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  public reset(): void {
    this.store.dispatch(reset());
  }
}
