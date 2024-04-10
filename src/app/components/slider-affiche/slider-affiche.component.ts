import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-affiche',
  templateUrl: './slider-affiche.component.html',
  styleUrls: ['./slider-affiche.component.css']
})
export class SliderAfficheComponent {

  

  @ViewChild('sliderafficheContent') sliderafficheContent?: ElementRef;
  @Input() items?: { src: string }[];
  currentIndex = 1;
  

  previous() {
    if (this.sliderafficheContent && this.items) {
      const widthSlider = this.sliderafficheContent.nativeElement.offsetWidth;
      const newIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
      this.currentIndex = newIndex;
      this.sliderafficheContent.nativeElement.scrollLeft = widthSlider * newIndex;
    }
  }
  
  next() {
    if (this.sliderafficheContent && this.items) {
      const widthSlider = this.sliderafficheContent.nativeElement.offsetWidth;
      const newIndex = this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
      this.sliderafficheContent.nativeElement.scrollLeft = widthSlider * newIndex; 
    }
  }

  ngAfterViewInit() {
  if (this.sliderafficheContent) {
    const secondImage = this.sliderafficheContent.nativeElement.children[1];
    this.sliderafficheContent.nativeElement.scrollLeft = secondImage.offsetLeft;
  }
}
}