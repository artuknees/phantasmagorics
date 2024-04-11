import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-project141w85',
  templateUrl: './project141w85.component.html',
  styleUrls: ['./project141w85.component.css']
})
export class Project141w85Component implements AfterViewInit{

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

  // images: string[] = [
  //   './assets/141/1.png',
  //   './assets/141/2.png',
  //   './assets/141/3.png',
  //   './assets/141/4.png',
  //   './assets/141/5.png',
  //   './assets/141/6.png',
  //   './assets/141/7.png',
  //   './assets/141/8.png',
  //   './assets/141/9.png',
  //   './assets/141/10.png',
  //   './assets/141/11.png',

  // ]
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
