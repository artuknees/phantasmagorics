import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { whiteTextPages } from '../resources/whiteTextPages';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent {
  isWhiteText = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if(whiteTextPages.includes(this.router.url)) {
        this.isWhiteText = true
      } else {
        this.isWhiteText = false
      }
    });
  }
}
