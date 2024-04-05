import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent implements OnInit {

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
