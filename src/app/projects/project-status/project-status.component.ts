import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.css']
})
export class ProjectStatusComponent implements AfterViewInit{

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

  statusImages: string[] = [
    './assets/status/1.png',
    './assets/status/2.png',
    './assets/status/3.png',
    './assets/status/4.png',

  ]

}
