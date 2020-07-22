import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  departmentsList: [];

  constructor(private employeesService: EmployeesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.employeesService.getDepartments().subscribe(data => {
      this.departmentsList = data;
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.employeesService.create(form.value).subscribe(data => {
      form.resetForm();
      this._snackBar.open('New Employee Added Successfully!', '', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });
    });
  }

}
