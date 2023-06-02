import { Component, Input } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-sectionbox',
  templateUrl: './sectionbox.component.html',
  styleUrls: ['./sectionbox.component.scss']
})
export class SectionboxComponent {
@Input() align:any='';
@Input() title:any='';
@Input() header_content:any='';
@Input() content:any='';
@Input() selectlist?:any='';
@Input() search?:any='';
@Input() userfilter?:any='';
@Input() addbtn?:any='';
@Input() productfilter?:any='';
@Input() published?:any='';
@Input() productform?:any='';

searchText:string='';
selectedSponsor:string='';

constructor(private modalService: ModalService) {}
//modal
openModal(content: any) {this.modalService.openModal(content);}
closeModal() {this.modalService.closeModal();}


}
