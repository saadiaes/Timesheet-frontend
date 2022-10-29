import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {ProjetsComponent} from "./projets/projets.component";
import {TasksComponent} from "./tasks/tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewProjetComponent} from "./new-projet/new-projet.component";

import {NewTimesheetComponent} from "./new-timesheet/new-timesheet.component";
import {TimesheetsComponent} from "./timesheet/timesheet.component";

const routes: Routes = [
  {path:"user",component : UsersComponent},
  {path:"new-user",component:NewUserComponent},
  {path:"projet",component:ProjetsComponent},
  {path:"task",component:TasksComponent},
  {path:"new-task",component:NewTaskComponent},
  {path:"new-projet",component:NewProjetComponent},
  {path:"timesheet",component:TimesheetsComponent},
  {path:"new-timesheet",component:NewTimesheetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
