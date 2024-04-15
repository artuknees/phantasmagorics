import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../resources/projects';

@Component({
  selector: 'app-genericProject',
  templateUrl: './genericProject.component.html',
  styleUrls: ['./genericProject.component.css']
})
export class GenericProjectComponent implements AfterViewInit {
  private mySwiper: Swiper | undefined;
  swiperParams: SwiperOptions = {
    autoplay: false,
    loop: true,
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
    direction: 'horizontal'
  };

  images: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.loadProjectImages(projectId);
    });
  }

  loadProjectImages(projectId: string): void {
    const project = projects.find(p => p.name === projectId);
    if (project) {
      this.images = project.images;
      this.initSwiper();
    } else {
      console.error('Project not found');
    }
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper', this.swiperParams);
  }
}
