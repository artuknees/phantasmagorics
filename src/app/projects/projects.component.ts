import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  host: {class: 'myClass'},
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  galleryItems = [
    { href: "projects/Renovation-1", src: "assets/thumbnails/Renovation-1.png" }, // 131w82
    { href: "projects/Renovation-2", src: "assets/thumbnails/Renovation-2.jpg" }, // 141w85
    { href: "projects/Fit-out-1", src: "assets/thumbnails/Fit-out-1.jpg" }, // 301w118
    { href: "projects/PARSONS-AAS-3", src: "assets/thumbnails/PARSONS-AAS-3.jpg" }, // hotel
    { href: "projects/PARSONS-AAS-2", src: "assets/thumbnails/PARSONS-AAS-2.jpg" } // statusquo
  ];
}
