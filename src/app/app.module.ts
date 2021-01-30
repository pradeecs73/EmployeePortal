import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './app/employee-registration/employee-registration.component';
import { employeeRegistrationService } from './services/employeeRegistration.service';
import { RegisteredEmployeesListComponent } from './app/registered-employees-list/registered-employees-list.component';
import { registeredEmployeeListService } from './services/registeredEmployeeList.service';
import { RouteConfigModule } from './routeconfig.module';
import {SortEmployeeListPipe} from './pipes/sortPipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    RegisteredEmployeesListComponent,
    SortEmployeeListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteConfigModule
  ],
  providers: [employeeRegistrationService,registeredEmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
