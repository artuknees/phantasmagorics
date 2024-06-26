import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  host: {class: 'myClass'},
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  galleryItems = [
    { href: "projects/131w82", src: "assets/thumbnails/131w82.png" },
    { href: "projects/141w85", src: "assets/thumbnails/141w85.jpg" },
    { href: "projects/301w118", src: "assets/thumbnails/301w118.jpg" },
    { href: "projects/hotel", src: "assets/thumbnails/hotel.jpg" },
    { href: "projects/statusquo", src: "assets/thumbnails/status.jpg" }
  ];
}
