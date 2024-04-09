import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './galleryItem.component.html',
  styleUrls: []
})
export class GalleryItemComponent {
  @Input() src = '';
  @Input() href = '';
}
