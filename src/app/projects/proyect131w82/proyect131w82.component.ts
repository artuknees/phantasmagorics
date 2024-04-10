import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-proyect131w82',
  templateUrl: './proyect131w82.component.html',
  styleUrls: ['./proyect131w82.component.css']
})
export class Proyect131w82Component implements AfterViewInit{

  private mySwiper: Swiper | undefined;

  swiperParams: SwiperOptions = {
    autoplay: false,
    slidesPerView: 1,
    spaceBetween: 50,
    centeredSlides: true,
    watchOverflow: false,
    lazyPreloadPrevNext: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    modules: [Navigation],
  };

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper', this.swiperParams);
  }

  images: string[] = [
    './assets/projects/131/1.png',
    './assets/projects/131/2.png',
    './assets/projects/131/3.png',
    './assets/projects/131/4.png',
    './assets/projects/131/5.png',
    './assets/projects/131/6.png',
    './assets/projects/131/7.png',
    './assets/projects/131/8.png',
  ]
}
