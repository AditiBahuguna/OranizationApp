import { department } from './../modal/department-modal';
import { employee } from './../modal/employee-modal';
import { employeeList } from './../modal/employeeList-modal';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  myEmployeeList = employeeList;
  name;
  type; department; manager;
  emp;
  // name : FormControl = new FormControl('', Validators.required);
  // type : FormControl = new FormControl('', Validators.required);
  // department : FormControl = new FormControl('', Validators.required);


  constructor() {

  }

  ngOnInit(): void {
    this.emp = new employee();
  }

  addEmployee(){

    // console.log(this.name);
    this.emp.name = this.name;
    this.emp.type = this.type;
    this.emp.department = this.department;
    this.emp.manager = this.manager;

    //  let employee[name] = {
    //   name : this.name,
    //   type : this.type,
    //   department : this.department,
    //   manager : this.manager
    // }
     this.myEmployeeList.push(this.emp);
  }
}
