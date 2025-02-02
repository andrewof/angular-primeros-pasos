import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="decrementBy()">-1</button>
    <button (click)="increaseBy()">+1</button>

  `,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }

  decrementBy(): void {
    this.counter -= 1;
  }
}
