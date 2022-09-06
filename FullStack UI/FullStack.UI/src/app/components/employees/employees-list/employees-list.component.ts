import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';

import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'salary', 'department', 'edit'];
  dataSource = new MatTableDataSource<Employee>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _employeesService: EmployeesService) {
  };

  ngOnInit(): void {
    this._employeesService.getAllEmployees()
      .subscribe({
        next: (employees) => {
          // console.log(employees);
          // this.employees = employees;
          this.dataSource = new MatTableDataSource(employees);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}