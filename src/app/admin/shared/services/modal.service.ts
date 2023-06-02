import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) { }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  closeModal() {
    this.modalRef?.dismiss();
  }
}