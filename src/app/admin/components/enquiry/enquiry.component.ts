import { Component } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {
  constructor(private modalService: ModalService) {}
  //modal
  openModal(content: any) {this.modalService.openModal(content);}
  closeModal() {this.modalService.closeModal();}
}
