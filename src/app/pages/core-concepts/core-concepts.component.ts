import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { APP_CONSTANTS } from '../../utils/constants';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-core-concepts',
  standalone: true,
  imports: [],
  templateUrl: './core-concepts.component.html',
  styleUrl: './core-concepts.component.scss',
})
export class CoreConceptsComponent implements OnInit, AfterViewChecked {
  constants = APP_CONSTANTS;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  code = `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="${this.constants.ICON_MENU}" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">
      ChitChat
    </div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>`;

  /**
   * Lifecycle hook AfterViewChecked is used here to call the highlight service
   * when view is ready.
   * Method ngAfterViewChecked might be called multiple times.
   * I use highlighted boolean to check if highlighting is already done
   * to prevent multiple highlightAll method calls.
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  /**
   * Fetch blog post from API
   */
  ngOnInit() {}
}
