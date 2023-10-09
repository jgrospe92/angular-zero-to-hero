import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation]
})
export class AppComponent {
  pageTitle = 'photo-inventory';

  constructor(private context: ChildrenOutletContexts){}

  getAnimationData() {
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}
