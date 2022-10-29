import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";

import {FormBuilder, FormGroup} from "@angular/forms";
import {Task} from "../model/task.model";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    task !: Observable<Array<Task>>;
    errorMessage!: object;

    searchFormGroup: FormGroup | undefined;

    constructor(private taskService: TaskService, private fb: FormBuilder) {
    }

    ngOnInit(): void {

        this.searchFormGroup = this.fb.group({
            keyword: this.fb.control("")
        });
        this.handleSearchTasks();
    }


    handleSearchTasks() {
        let kw = this.searchFormGroup?.value.keyword;
        this.task = this.taskService.searchTasks(kw).pipe(
            catchError(err => {
                this.errorMessage = err.message;
                return throwError(err);
            })
        );
    }

    handleDeleteTask(t: Task) {

        let conf = confirm("Are you sure?");
        if (!conf) return;
        this.taskService.deleteTask(t.id).subscribe({
            next: (resp) => {
                this.task = this.task.pipe(
                    map(data => {
                        let index = data.indexOf(t);
                        data.slice(index, 1)
                        return data;
                    })
                );

            },


            error: err => {
                console.log(err);
            }
        })

    }
}






