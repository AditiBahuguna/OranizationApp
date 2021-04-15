import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {path : '', redirectTo : '/home', pathMatch : 'full'},
  {path : 'home', component : SidebarComponent},
  {path : 'department', component : DepartmentComponent },
  {path : 'employee', component : EmployeeComponent},
  {path : 'details', component : DetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
