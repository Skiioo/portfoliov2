import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  scrollToBottom(): void {
    const element = document.getElementById('text-pres');
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  }

  stopAnimation(): void {
    const element = document.querySelector('.arrow_down_home');
    if (element) {
      element.classList.add('stop-animation');
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  scrollToBottomm(): void {
    // Votre code pour faire défiler vers le bas ici
  }

  stopAnimationn(): void {
    // Votre code pour arrêter l'animation ici
  }
  
 

}
