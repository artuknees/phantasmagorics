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
    loop: true,
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
    console.log('Inicialización de Swiper');
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper', this.swiperParams);
  }

  images: string[] = [
    './assets/hotel/1.png',
    './assets/hotel/2.png',
    './assets/hotel/3.png',
    './assets/hotel/4.png',
    './assets/hotel/5.png',
    './assets/hotel/6.png',
    './assets/hotel/7.png',
    './assets/hotel/8.png',
    './assets/hotel/9.png',
    './assets/hotel/10.png',
    './assets/hotel/11.png',

  ]

}