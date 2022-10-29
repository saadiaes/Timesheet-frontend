import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Timesheet} from "../model/timesheet.model";
import {TimesheetService} from "../services/timesheet.service";
@Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
})
export class TimesheetsComponent implements OnInit {
    timesheet !: Observable<Array<Timesheet>>;
    errorMessage!: object;
    searchFormGroup: FormGroup | undefined;
    constructor(private timesheetService: TimesheetService, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.timesheet=this.timesheetService.getTimesheet().pipe(
            catchError(err=>{
                this.errorMessage=err.message;
                return throwError(err);
            })
        );
        this.searchFormGroup = this.fb.group({
            keyword: this.fb.control("")
        });
    }}



