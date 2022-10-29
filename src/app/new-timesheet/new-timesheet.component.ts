import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Timesheet} from "../model/timesheet.model";
import {TimesheetService} from "../services/timesheet.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-new-timesheet',
  templateUrl: './new-timesheet.component.html',
  styleUrls: ['./new-timesheet.component.css']
})
export class NewTimesheetComponent implements OnInit {

  newTimesheetFormGroup! :FormGroup;
  constructor(private fb:FormBuilder,private timesheetService: TimesheetService ,private router:Router) { }

  ngOnInit(): void {
    this.newTimesheetFormGroup=this.fb.group({
      day:this.fb.control( null,[Validators.required]),
      name_projet:this.fb.control( null,[Validators.required]),
      hours:this.fb.control( null,[Validators.required]),
      status:this.fb.control( null,[Validators.required]),
      user:this.fb.control( null,[Validators.required]),
    })
  }


  handleSaveTimesheet() {
    let timesheet:Timesheet=this.newTimesheetFormGroup.value;
    this.timesheetService.saveTimesheet(timesheet).subscribe({
      next:data=>{
        alert("Timesheet has been successfully saved!");
      },
      error:err=>{
        console.log(err);
      }
    })
  }



}
