import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('main')
  main!: ElementRef;

  desktopImageUrls: string[] = [
    'url(/assets/desktop-background/1.png)',
    'url(/assets/desktop-background/2.png)',
    'url(/assets/desktop-background/3.png)',
    'url(/assets/desktop-background/4.png)',
    'url(/assets/desktop-background/5.png)',
    'url(/assets/desktop-background/6.png)',
  ];
  mobileImageUrls: string[] = [
    'url(/assets/mobile-background/1.png)',
    'url(/assets/mobile-background/2.png)',
    'url(/assets/mobile-background/3.png)',
    'url(/assets/mobile-background/4.png)',
    'url(/assets/mobile-background/5.png)',
  ];

  ngAfterViewInit() {
    this.chekScreenWidth();
  }
  
  chekScreenWidth() {
    if (window.innerWidth > 600) {
      this.changeDesktopImg();
    } else {
      this.changeMobileImg();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.chekScreenWidth();
  }

  changeDesktopImg() {
    let index = Math.floor((Math.random() * 10) % this.desktopImageUrls.length);
    this.main.nativeElement.style.backgroundImage = this.desktopImageUrls[index];

    console.log(index);
  }
  changeMobileImg() {
    let index = Math.floor((Math.random() * 10) % this.mobileImageUrls.length);
    this.main.nativeElement.style.backgroundImage = this.mobileImageUrls[index];

    console.log(index);
  }
}
