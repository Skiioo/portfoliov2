import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrl: './realisation.component.css'
})
export class RealisationComponent implements OnInit{


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
