import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../resources/projects';

interface description {
  title: string
  subTitle: string
  boldFooter: string
  paragraphs: string[]
}

@Component({
  selector: 'app-genericProject',
  templateUrl: './genericProject.component.html',
  styleUrls: ['./genericProject.component.css']
})
export class GenericProjectComponent implements OnInit {
  private mySwiper: Swiper | undefined;

  swiperParams: SwiperOptions = {
    autoplay: false,
    slidesPerView: 1,
    centeredSlides: false,
    loop: false,
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
  description: description = {
    title: '',
    subTitle: '',
    boldFooter: '',
    paragraphs: []
  };

  isLastImage = false;
  isFirstImage = true;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.loadProjectData(projectId);
    });
  }

  loadProjectData(projectId: string): void {
    const project = projects.find(p => p.name === projectId);
    if (project) {
      this.images = project.images;
      this.description = project.description ?? {
        title: '',
        subTitle: '',
        boldFooter: '',
        paragraphs: []
      }
      this.initSwiper();
    } else {
      console.error('Project not found');
    }
  }

  UpdateButtonOpacity () {
    console.log('update opacity')
    this.mySwiper?.isBeginning
      ? this.isFirstImage = true
      : this.isFirstImage = false

    this.mySwiper?.isEnd
      ? this.isLastImage = true
      : this.isLastImage = false
    }


  initSwiper() {
    this.mySwiper = new Swiper('.swiper', {
      ...this.swiperParams,
      on: {
        slideChange: () => {
          this.UpdateButtonOpacity()
        }
      }
    });
    this.isFirstImage = true;
    this.isLastImage = false;
  }
}
