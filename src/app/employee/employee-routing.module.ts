import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [{
  path: "", redirectTo: "list", pathMatch: "full"
}, {
  path: "list",
  component: EmployeeListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
