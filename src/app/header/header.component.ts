import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-lmnt',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();
  selectFeature(feature: string) {
    // pass feature to app-component here
    this.featureSelected.emit(feature);
  }
}
