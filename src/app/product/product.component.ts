import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {class: 'myClass'},
  styleUrls: []
})
export class ProductComponent {
  backgroundImageUrl: string;
  constructor() {
    const desktopBackgrounds = 8;
    const mobileBackgrounds = 9;
    if (window.innerWidth > 600) {
      const randomNumber = Math.floor(Math.random() * desktopBackgrounds) + 1;
      this.backgroundImageUrl = `assets/desktopBackgrounds/home_page_${randomNumber}.jpg`;
    } else {
      const randomNumber = Math.floor(Math.random() * mobileBackgrounds) + 1;
      this.backgroundImageUrl = `assets/mobileBackgrounds/home_page_${randomNumber}.jpg`;
    }
  }
}
