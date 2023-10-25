import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserFormComponent} from "./components/new-user-form/new-user-form.component";
import {UserListComponent} from "./components/user-list/user-list.component";

const routes: Routes = [
  {path: 'user-list', component: UserListComponent },
  {path: 'create-user', component: NewUserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
