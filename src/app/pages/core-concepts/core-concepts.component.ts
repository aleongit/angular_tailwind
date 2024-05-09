import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { APP_CONSTANTS } from '../../utils/constants';
import { HighlightService } from '../../services/highlight.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private highlightService: HighlightService,
    private sanitized: DomSanitizer
  ) { }

  code1 = `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
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

  code2 = `<button class="bg-sky-500 hover:bg-sky-700">
Save changes
</button>`
  code2Sanitized = this.sanitized.bypassSecurityTrustHtml(`<button class="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
  Save changes
</button>`);

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
  ngOnInit() { }
}
