import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // others
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
