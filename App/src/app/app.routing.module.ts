import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './cadastro/employee/employee-create/employee-create.component';
import { EmployeeReadComponent } from './cadastro/employee/employee-read/employee-read.component';


const routes: Routes = [


    { path: 'employee/cadastro', component: EmployeeCreateComponent },
    { path: 'employee/cadastro/:id', component: EmployeeCreateComponent },
    { path: 'employees', component: EmployeeReadComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

