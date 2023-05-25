import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  @Input()
  public contador!: number;

  @Output()
  public cambioContador: EventEmitter<number> = new EventEmitter();

  public multiplicar(): void {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  public dividir(): void {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }
}
