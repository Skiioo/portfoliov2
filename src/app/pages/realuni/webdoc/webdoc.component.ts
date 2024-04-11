import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-webdoc',
  templateUrl: './webdoc.component.html',
  styleUrl: './webdoc.component.css'
})
export class WebdocComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    // Écoutez les événements de navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Lorsqu'un événement de navigation se termine, faites défiler la fenêtre en haut
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }
}
