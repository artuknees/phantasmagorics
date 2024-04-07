import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-project-hotel',
  templateUrl: './project-hotel.component.html',
  styleUrls: ['./project-hotel.component.css']
})
export class ProjectHotelComponent implements AfterViewInit{

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

  hotelImages: string[] = [
    './assets/hotel/1.png',
    './assets/hotel/2.png',
    './assets/hotel/3.png',
    './assets/hotel/4.png',
    './assets/hotel/5.png',

  ]

}
