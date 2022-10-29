import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NewUserComponent } from './new-user/new-user.component';

import { FormsModule} from "@angular/forms";
import { ProjetsComponent } from './projets/projets.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewProjetComponent } from './new-projet/new-projet.component';
import { NewTimesheetComponent } from './new-timesheet/new-timesheet.component';
import {TimesheetsComponent} from "./timesheet/timesheet.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    NewUserComponent,
    ProjetsComponent,
    TasksComponent,
    NewTaskComponent,
    NewProjetComponent,
    NewTimesheetComponent,
    TimesheetsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      ReactiveFormsModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
