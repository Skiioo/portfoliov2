import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  scrollToBottom(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Votre code pour faire défiler vers le bas ici
    }
  }

  stopAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Votre code pour arrêter l'animation ici
    }
  }
}