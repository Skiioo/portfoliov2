import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-three-sushi',
  templateUrl: './slider-three-sushi.component.html',
  styleUrl: './slider-three-sushi.component.css'
})
export class SliderThreeSushiComponent { 

  @ViewChild('sliderThreeSushiContent') sliderThreeSushiContent?: ElementRef;
  @Input() items?: { src: string }[];
  currentIndex = 1;
  

  previous() {
    if (this.sliderThreeSushiContent && this.items) {
      const widthSlider = this.sliderThreeSushiContent.nativeElement.offsetWidth;
      const newIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
      this.currentIndex = newIndex;
      this.sliderThreeSushiContent.nativeElement.scrollLeft = widthSlider * newIndex;
    }
  }
  
  next() {
    if (this.sliderThreeSushiContent && this.items) {
      const widthSlider = this.sliderThreeSushiContent.nativeElement.offsetWidth;
      const newIndex = this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
      this.sliderThreeSushiContent.nativeElement.scrollLeft = widthSlider * newIndex; 
    }
  }

  ngAfterViewInit() {
  if (this.sliderThreeSushiContent) {
    const secondImage = this.sliderThreeSushiContent.nativeElement.children[1];
    this.sliderThreeSushiContent.nativeElement.scrollLeft = secondImage.offsetLeft;
  }
}

}
