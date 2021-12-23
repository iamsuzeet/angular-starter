import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export interface EMPLOYEE {
  name: string;
  code: string;
  joineddate: string;
  email: string;
  gender: string;
  address: string;
  position: string;
  mobile: string;
}

export const EMPLOYEES = [
  {
    name: 'Sujit Dhaugoda',
    code: 'SD',
    joineddate: "2020-01-01",
    email: "sujit@infodevelopers.com.np",
    gender: "Male",
    address: "ktm",
    position: "Mid Level",
    mobile: "9849246635"
  },

];


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = EMPLOYEES;
  // public openModal = false;
  constructor(public modalService: NgbModal) { }

  public modalToggle() {
    // this.openModal = !this.openModal
  }

  ngOnInit(): void {
  }

  openModal = (content: any) => {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
  }

  closeModal = () => {
    this.modalService.dismissAll()
  }

  addEmployee = (employee: EMPLOYEE) => {
    this.employees.push(employee)

  }

}
