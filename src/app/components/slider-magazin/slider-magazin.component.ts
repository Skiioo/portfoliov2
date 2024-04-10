import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-magazin',
  templateUrl: './slider-magazin.component.html',
  styleUrl: './slider-magazin.component.css'
})
export class SliderMagazinComponent {

  @ViewChild('slidermagazinContent') slidermagazinContent?: ElementRef;
  @Input() items?: { src: string }[];
  currentIndex = 1;
  

  previous() {
    if (this.slidermagazinContent && this.items) {
      const widthSlider = this.slidermagazinContent.nativeElement.offsetWidth;
      const newIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
      this.currentIndex = newIndex;
      this.slidermagazinContent.nativeElement.scrollLeft = widthSlider * newIndex;
    }
  }
  
  next() {
    if (this.slidermagazinContent && this.items) {
      const widthSlider = this.slidermagazinContent.nativeElement.offsetWidth;
      const newIndex = this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
      this.slidermagazinContent.nativeElement.scrollLeft = widthSlider * newIndex; 
    }
  }

  ngAfterViewInit() {
  if (this.slidermagazinContent) {
    const secondImage = this.slidermagazinContent.nativeElement.children[1];
    this.slidermagazinContent.nativeElement.scrollLeft = secondImage.offsetLeft;
  }
}
}
