import {  Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class employeeRegistrationService {
  private employeeDetails = new BehaviorSubject("");
  currentEmployee = this.employeeDetails.asObservable();

  constructor() {}

  getEmployeeDetails(empDetails: any) {
    this.employeeDetails.next(empDetails);
  }

  useridreceivedfromcomponent = new Subject();
}