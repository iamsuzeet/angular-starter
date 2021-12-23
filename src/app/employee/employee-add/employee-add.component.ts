import { Component, OnInit, Input } from '@angular/core';
import { EMPLOYEES } from '../employee-list/employee-list.component';



@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  @Input() openModal: any = ''
  @Input() closeModal: any = ''
  @Input() addEmployee: any = ''
  model: any = {};
  constructor() { }
  ngOnInit(): void {
  }


  openAddModal() {
    this.openModal()
  }

  closeAddModal() {
    this.closeModal()
  }

  onSubmit() {
    this.addEmployee(this.model)
    this.closeAddModal();
    this.model = {}
  }

}
