import { employeeList } from './../modal/employeeList-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  manager : String;
  department : String;
  filteredEmpByM = [];
  filteredEmpByD =[];
  constructor() { }

  ngOnInit(): void {
  }

  printEmployeesByManager () {
    this.filteredEmpByM = employeeList.filter((employee)=> employee.manager===this.manager)
  }
  printEmployeesByDepartment () {
    this.filteredEmpByD = employeeList.filter((employee)=> employee.department===this.department)
  }v


}
