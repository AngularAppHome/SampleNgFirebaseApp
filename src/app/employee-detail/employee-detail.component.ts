import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../Shared/employee.model';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers:[EmployeeService]
})

export class EmployeeDetailComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    var emp = this.employeeService.getData();
    emp.snapshotChanges().subscribe(item=>{
      this.employeeList = [];
      item.forEach(element=>{
        var empData = element.payload.toJSON();
        empData["$key"] = element.key;
        this.employeeList.push(empData as Employee);
      });
    });
  }

  onSubmit(employeeForm:NgForm){
      this.employeeService.insertEmployee(employeeForm.value);
  }

}
