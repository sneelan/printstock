import { Component } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showform:string='';

  constructor(private modalService: ModalService) {}
//modal
openModal(content: any) {this.modalService.openModal(content);}
closeModal() {this.modalService.closeModal();}
}
