import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent {
  @Input()
  public contador!: number;

  @Output()
  public cambioContador: EventEmitter<number> = new EventEmitter();

  public reset(): void {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
