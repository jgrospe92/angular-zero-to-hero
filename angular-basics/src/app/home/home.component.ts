import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pageTitle: string = "Photo Inventory"
  githubLink:string = "https://github.com/jgrospe92"

}
