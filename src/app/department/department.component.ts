import { department } from './../modal/department-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentName : string;
  // departmentList : [String];
  constructor() { }

  ngOnInit(): void {
  }

  addDepartment(){
    // this.departmentList.push(this.departmentName);
    department.push(this.departmentName);
  }
}
