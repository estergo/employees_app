import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeesComponent
    },
    {
        path: 'new',
        component: NewEmployeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
