import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({selector: 'ngb-dropdown', host: {'class': 'dropdown', '[class.open]': 'open', '(window:click)': 'clickHandler($event)'}})
export class NgbDropdown {
  @Input() open = false;

  constructor(private _eref: ElementRef) { }
  
  @HostListener('click')
  toggleOpen() {
    this.open = !this.open;
  }
  
  clickHandler(event) {
    if (this.open && !this._eref.nativeElement.contains(event.target))
      this.toggleOpen();
  }
}

// @Directive({
//   selector: '[ngb-dropdown-toggle]',
//   host: {'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': '_dropdown.open'}
// })
// export class NgbDropdownToggle {
//   constructor(private _dropdown: NgbDropdown) {}

//   @HostListener('click')
//   toggleOpen() {
//     this._dropdown.open = !this._dropdown.open;
//   }
// }