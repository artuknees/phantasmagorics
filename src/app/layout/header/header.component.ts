import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { whiteTextPages } from '../resources/whiteTextPages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  isWhiteText = false;
  desktopImageUrl = '';
  menuImageUrl = {
    desktop: '',
    // mobile: ''
  };
  isHome = true;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.router.url === '/home' ? this.isHome = true : this.isHome = false
      if(whiteTextPages.includes(this.router.url)) {
        this.isWhiteText = true
        this.desktopImageUrl = 'assets/logo-desktop-white.png'
        this.menuImageUrl = {
          desktop: 'assets/menuToggle/menuWhiteDesktop.png',
          // mobile: 'assets/menuToggle/menuWhiteMobile.png'
        }
      } else {
        this.isWhiteText = false
        this.desktopImageUrl = 'assets/logo-desktop-blue.png'
        this.menuImageUrl = {
          desktop: 'assets/menuToggle/menuBlueDesktop.png',
          // mobile: 'assets/menuToggle/menuBlueMobile.png'
        }
      }
    });
  }
}
