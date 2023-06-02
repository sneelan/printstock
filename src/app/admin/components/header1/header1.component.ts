import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component {
  showdropdown:string='';
  constructor(private elementRef: ElementRef) {}
  clickdropdown(){
    this.showdropdown = this.showdropdown === 'show' ? '' : 'show';
  }
  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.showdropdown = '';
    }
  }

}
