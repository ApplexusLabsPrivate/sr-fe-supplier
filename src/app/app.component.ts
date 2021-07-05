import { Component } from '@angular/core';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-root',
  template: `<!--The content below is only a placeholder and can be replaced.-->
  <button *ngIf="Pwa.promptEvent" (click)="installPwa()">
      Install
  </button>
  
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})

export class AppComponent {
  title = 'simpleretail-template';

  constructor(public Pwa: PwaService) {
    
  }
  
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
}
