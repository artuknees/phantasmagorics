import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-project301w118',
  templateUrl: './project301w118.component.html',
  styleUrls: ['./project301w118.component.css']
})
export class Project301w118Component implements AfterViewInit{

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
    './assets/301/1.png',
    './assets/301/2.png',
    './assets/301/3.png',

  ]

}
