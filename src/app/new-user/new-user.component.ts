import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "../model/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    newUserFormGroup!:FormGroup;

  constructor(private fb:FormBuilder,private userService:UserService){}

  ngOnInit(): void {
  this.newUserFormGroup=this.fb.group({
     name:this.fb.control( null,[Validators.required,Validators.minLength(4)]),
    email:this.fb.control(null,[Validators.required,Validators.email])
      })
    }

  handleSaveUser() {
    let user:User=this.newUserFormGroup.value;
      this.userService.saveUser(user).subscribe({
        next:data=>{
          alert("User has been successfully saved!");

        },
        error:err=>{
          console.log(err);

        }
      })

  }
}


