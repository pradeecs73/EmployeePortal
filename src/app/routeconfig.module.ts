import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { EmployeeRegistrationComponent } from './app/employee-registration/employee-registration.component';
import { RegisteredEmployeesListComponent } from './app/registered-employees-list/registered-employees-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: EmployeeRegistrationComponent },
    { path: 'employeeList', component: RegisteredEmployeesListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
  })
  export class RouteConfigModule {}
  