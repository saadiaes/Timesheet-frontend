import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Timesheet} from "../model/timesheet.model";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class TimesheetService {


  constructor(private http: HttpClient) {

  }

  public getTimesheet(): Observable<Array<Timesheet>> {
    return this.http.get<Array<Timesheet>>(environment.backendHost + "/timesheet")
  }

  public saveTimesheet(timesheet: Timesheet): Observable<Timesheet> {
    return this.http.post<Timesheet>(environment.backendHost + "/timesheet", timesheet);
  }

}


