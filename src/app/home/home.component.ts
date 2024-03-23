import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('main')
  main!: ElementRef;

  imageUrls: string[] = [
    'url(/assets/desktop-background/1.png)',
    'url(/assets/desktop-background/2.png)',
    'url(/assets/desktop-background/3.png)',
    'url(/assets/desktop-background/4.png)',
    'url(/assets/desktop-background/5.png)',
    'url(/assets/desktop-background/6.png)',
  ];

  ngAfterViewInit() {
    this.changeImg();
  }

  changeImg() {
    let index = Math.floor((Math.random() * 10) % this.imageUrls.length);
    this.main.nativeElement.style.backgroundImage = this.imageUrls[index];

    console.log(index);
  }
}
