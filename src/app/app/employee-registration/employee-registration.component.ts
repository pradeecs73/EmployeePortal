import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeRegistrationService } from './../../services/employeeRegistration.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  departmentname:any="";
  constructor(private employeeRegistrationService: employeeRegistrationService,private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.invalid)
    { 
      return;
    }
    else{
      this.employeeRegistrationService.getEmployeeDetails(form.value);
      this.router.navigate(['/employeeList'], { relativeTo: this.route })
    }
   
  }

 

}
