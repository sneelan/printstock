import { Component, Input } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  @Input() searchText='';
  @Input() selectedSponsor='';
  showform:string='';
  users = [
    { name: "John Abraham", email: "john@gmail.com", designation: "designer", photo: "user-1.png", orders: 5, value: 120, sponsor: "facebook" },
    { name: "Jane Doe", email: "jane@gmail.com", designation: "tester", photo: "user-icon.svg", orders: 3, value: 80, sponsor: "google" },
    { name: "Mike Smith", email: "mike@gmail.com", designation: "developer", photo: "user-1.png", orders: 8, value: 200, sponsor: "linkedin" },
    { name: "Emily Johnson", email: "emily@gmail.com", designation: "designer", photo: "user-icon.svg", orders: 2, value: 50, sponsor: "facebook" },
    { name: "David Williams", email: "david@gmail.com", designation: "tester", photo: "user-icon.svg", orders: 6, value: 150, sponsor: "google" },
    { name: "Sarah Thompson", email: "sarah@gmail.com", designation: "developer", photo: "user-1.png", orders: 4, value: 100, sponsor: "linkedin" },
    { name: "Michael Brown", email: "michael@gmail.com", designation: "designer", photo: "user-icon.svg", orders: 7, value: 180, sponsor: "facebook" },
    { name: "Amy Wilson", email: "amy@gmail.com", designation: "tester", photo: "user-1.png", orders: 1, value: 30, sponsor: "google" },
    { name: "Jason Davis", email: "jason@gmail.com", designation: "developer", photo: "user-icon.svg", orders: 9, value: 220, sponsor: "linkedin" },
    { name: "Linda Wilson", email: "linda@gmail.com", designation: "designer", photo: "user-1.png", orders: 3, value: 70, sponsor: "facebook" },
    { name: "Samuel Johnson", email: "samuel@gmail.com", designation: "designer", photo: "user-icon.svg", orders: 4, value: 110, sponsor: "google" },
    { name: "Rachel Davis", email: "rachel@gmail.com", designation: "tester", photo: "user-1.png", orders: 2, value: 90, sponsor: "linkedin" },
    { name: "Daniel Smith", email: "daniel@gmail.com", designation: "developer", photo: "user-icon.svg", orders: 6, value: 180, sponsor: "facebook" },
    { name: "Laura Thompson", email: "laura@gmail.com", designation: "designer", photo: "user-1.png", orders: 3, value: 60, sponsor: "google" },
    { name: "James Wilson", email: "james@gmail.com", designation: "tester", photo: "user-icon.svg", orders: 5, value: 130, sponsor: "linkedin" },
    { name: "Sophia Anderson", email: "sophia@gmail.com", designation: "developer", photo: "user-1.png", orders: 9, value: 240, sponsor: "facebook" },
    { name: "Oliver Jackson", email: "oliver@gmail.com", designation: "designer", photo: "user-icon.svg", orders: 1, value: 40, sponsor: "google" },
    { name: "Emma Johnson", email: "emma@gmail.com", designation: "tester", photo: "user-1.png", orders: 7, value: 160, sponsor: "linkedin" },
    { name: "Ethan Davis", email: "ethan@gmail.com", designation: "developer", photo: "user-icon.svg", orders: 4, value: 120, sponsor: "facebook" },
    { name: "Mia Thompson", email: "mia@gmail.com", designation: "designer", photo: "user-icon.svg", orders: 2, value: 80, sponsor: "google" }
  ];

constructor(private modalService: ModalService) {}
//modal
openModal(content: any) {this.modalService.openModal(content);}
closeModal() {this.modalService.closeModal();}



//sorting table
ShowDynamicTable: any;
sortedColumn: string | undefined;
sortDirection: 'asc' | 'desc' | undefined;
sortTable(column: string): void {
  if (this.sortedColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortedColumn = column;
    this.sortDirection = 'asc';
  }
  // Call the sort function or API to sort the data accordingly
  this.sortEmployees();
}
sortEmployees(): void {
  // Implement your sorting logic here based on this.sortedColumn and this.sortDirection
  // Update the EmployeesArray with the sorted data
  // For example, you can use Array.prototype.sort() to sort the data
    if (this.sortedColumn && this.sortDirection) {
      this.users.sort((a: any, b: any) => {
        const valueA = a[this.sortedColumn as string];
        const valueB = b[this.sortedColumn as string];
  
        if (valueA && valueB) {
          if (valueA < valueB) {
            return this.sortDirection === 'asc' ? -1 : 1;
          } else if (valueA > valueB) {
            return this.sortDirection === 'asc' ? 1 : -1;
          }
        }
        return 0;
      });
    }				
}



}
