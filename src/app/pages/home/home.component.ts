import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init();
  }

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
}