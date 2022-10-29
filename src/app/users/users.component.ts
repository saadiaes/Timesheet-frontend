import { Component, OnInit } from '@angular/core';
//import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {User} from "../model/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    user !: Observable<Array<User>>;
    errorMessage!: object;

    searchFormGroup: FormGroup | undefined;

    constructor(private userService: UserService, private fb: FormBuilder
                ) {
    }

    ngOnInit(): void {
        this.searchFormGroup = this.fb.group({
            keyword: this.fb.control("")
        });
        this.handleSearchUsers();
    }

    handleSearchUsers() {
        let kw = this.searchFormGroup?.value.keyword;
        this.user = this.userService.searchUsers(kw).pipe(
            catchError(err => {
                this.errorMessage = err.message;
                return throwError(err);
            })
        );
    }


    handleDeleteUser(u: User) {
        let conf=confirm("Are you sure?");
        if(!conf)return;
        this.userService.deleteUser(u.id).subscribe({
            next: (resp) => {
                this.user = this.user.pipe(
                   map( data=>{
                        let index=data.indexOf(u);
                        data.slice(index,1)
                        return data;
                    })
                );

                },


            error:err=>{
            console.log(err);
        }
        })

    }

}


