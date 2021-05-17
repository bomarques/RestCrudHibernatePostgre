
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeReadComponent } from './employee/employee-read/employee-read.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';



@NgModule({
  declarations: [EmployeeReadComponent, EmployeeCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
