import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Add 'open' class to element this sits on
  // When clicked
  // Remove the class when clicked again

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggoleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
