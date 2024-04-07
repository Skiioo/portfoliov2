import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  scrollToBottom(): void {
    const element = document.getElementById('text-pres');
    if (element) {
      const top = element.offsetTop;
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    }
  }

  stopAnimation(): void {
    const element = document.querySelector('.arrow_down_home');
    if (element) {
      element.classList.add('stop-animation');
    }
  }
}