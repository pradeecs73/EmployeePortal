import { Component, OnDestroy, OnInit } from '@angular/core';
import { employeeRegistrationService } from './../../services/employeeRegistration.service';
import { registeredEmployeeListService } from './../../services/registeredEmployeeList.service';

@Component({
  selector: 'app-registered-employees-list',
  templateUrl: './registered-employees-list.component.html',
  styleUrls: ['./registered-employees-list.component.css']
})
export class RegisteredEmployeesListComponent implements OnInit,OnDestroy {

  employeeSubscription:any;
  constructor(private employeeRegistrationService: employeeRegistrationService,
    public registeredEmployeeListService:registeredEmployeeListService) { }

  ngOnInit() {
    this.employeeSubscription= this.employeeRegistrationService.currentEmployee.subscribe((empDetails:any) => {
      if(empDetails)
      {
        this.registeredEmployeeListService.employeeList.push(empDetails); 
      }
      console.log(this.registeredEmployeeListService.employeeList);
      
    });
  }

  ngOnDestroy(){
    this.employeeSubscription.unsubscribe();
  }

}
