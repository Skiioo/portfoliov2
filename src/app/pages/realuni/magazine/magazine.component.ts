import { Component } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.css'
})
export class MagazineComponent {
  sliderItems = [
    { src: "../../../../assets/img/SAE_103_page4.png" },
    { src: "../../../../assets/img/SAE_103_page1.png" },
    { src: "../../../../assets/img/SAE_103_page2.png" },
    { src: "../../../../assets/img/SAE_103_page3.png" },
    { src: "../../../../assets/img/SAE_103_page5.png" },
  ];
}
