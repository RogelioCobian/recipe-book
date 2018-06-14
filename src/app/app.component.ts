import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:no-inferrable-types
  loadedFeature: string = 'recipe';
  navigate(feature: string) {
    this.loadedFeature = feature;
    console.log(feature);
  }
}
