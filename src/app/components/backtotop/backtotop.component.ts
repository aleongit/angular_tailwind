import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-backtotop',
  standalone: true,
  imports: [],
  templateUrl: './backtotop.component.html',
  styleUrl: './backtotop.component.scss'
})
export class BacktotopComponent {

  @Output() scrollToTop = new EventEmitter<void>();

  onScrollToTop(): void {
    this.scrollToTop.emit();
  }

}
