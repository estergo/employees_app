import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeesList: Employee[] = [];
  itemsPerPage = 10;
  currentPagination = 0;
  isPaginationEnabled = true;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.employeesService.get(this.itemsPerPage, this.currentPagination).subscribe(data => {
      if (data.length) {
        this.employeesList = [...this.employeesList, ...data];
        this.currentPagination += this.itemsPerPage;
      } else {
        this.isPaginationEnabled = false;
      }
    });
  }

  removeEmployee(employeeId: number, index: number) {
    this.employeesService.delete(employeeId).subscribe(() => {
      this.employeesList.splice(index, 1);
    });
  }

}
