import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { backgroundPages } from './resources/backgroundPages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('customBackground', {static: false}) customBackground!: ElementRef;
  @ViewChild('customColor', {static: false}) customColor!: ElementRef;
  title = 'Phantasmagorics';
  isBlueBackground = false;
  hasLowerOpacity = false;

  constructor(private router: Router) {}
  ngAfterViewInit() {
    const desktopBackgrounds = 7;
    const mobileBackgrounds = 9;
    this.router.events.subscribe(() => {
      const pageIndex = backgroundPages.findIndex((item) => this.router.url.includes(item.path))
      if (pageIndex !== -1) {
        if (backgroundPages[pageIndex].hasImage === true) {
          if (window.innerWidth > 600) {
            const randomNumber = Math.floor(Math.random() * desktopBackgrounds) + 1;
            this.customBackground.nativeElement.style.backgroundImage = `url('assets/desktopBackgrounds/home_page_${randomNumber}.webp')`;
          } else {
            const randomNumber = Math.floor(Math.random() * mobileBackgrounds) + 1;
            this.customBackground.nativeElement.style.backgroundImage = `url('assets/mobileBackgrounds/home_page_${randomNumber}.webp')`;
          }
        } else {
          this.customBackground.nativeElement.style.backgroundImage = 'none';
        }
        this.customColor.nativeElement.style.backgroundColor = backgroundPages[pageIndex].hasBlue
        ? backgroundPages[pageIndex].hasOpaticy
          ? 'rgba(0, 51, 160, 0.87)'
          : 'rgba(0, 51, 160, 1)'
        : '#FF'
      } else {
        this.customBackground.nativeElement.style.backgroundImage = 'none';
        this.customColor.nativeElement.style.backgroundColor = '#FF'
      }
    })
  }
}
