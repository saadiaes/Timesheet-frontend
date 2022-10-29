import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Task} from "../model/task.model";
import {TaskService} from "../services/task.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,private taskService:TaskService,private router:Router) { }

  ngOnInit(): void {
    this.newTaskFormGroup=this.fb.group({
      name:this.fb.control( null,[Validators.required]),
      projet:this.fb.control( null,[Validators.required]),
      status:this.fb.control( null,[Validators.required]),
      user:this.fb.control( null,[Validators.required]),


    })
  }


  handleSaveTask() {

      let task:Task=this.newTaskFormGroup.value;
      this.taskService.saveTask(task).subscribe({
        next:data=>{
          alert("Task has been successfully saved!");

        },
        error:err=>{
          console.log(err);

        }
      })

    }



}
