import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-menuButton',
  templateUrl: './menuButton.component.html',
  styleUrls: []
})
export class MenuButtonComponent {
  @Input() onlyMobile = false;
}
