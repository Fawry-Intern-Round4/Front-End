import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {ButtonModule} from 'primeng/button';
import {NewUserFormComponent} from './components/new-user-form/new-user-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from './components/button/button.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserFormComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    TableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
