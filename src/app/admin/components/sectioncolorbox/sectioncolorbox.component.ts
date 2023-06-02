import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectioncolorbox',
  templateUrl: './sectioncolorbox.component.html',
  styleUrls: ['./sectioncolorbox.component.scss']
})
export class SectioncolorboxComponent {
  @Input() colorclass:any='';
  @Input() title:any='';
  @Input() content:any='';
  @Input() icon?:any='';
  @Input() image?:any='';
}
