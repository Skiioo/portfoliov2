import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  scrollToBottom(): void {
    // Votre code pour faire défiler vers le bas ici
  }

  stopAnimation(): void {
    // Votre code pour arrêter l'animation ici
  }

}
