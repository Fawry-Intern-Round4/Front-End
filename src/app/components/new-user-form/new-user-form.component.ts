import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CreateUser} from "../../models/CreateUser/CreateUser";
import { UserService } from 'src/app/services/UserService/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent {

  errorMessage: string | null = null;

  createUserForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  get username() {
    return this.createUserForm.controls['username'];
  }

  get password() {
    return this.createUserForm.controls['password'];
  }

  submitDetails() {
    this.userService.createUser(this.createUserForm.value as CreateUser).subscribe({
      error : (error : HttpErrorResponse) => {
        this.errorMessage = error.error.message;
      },
      complete : () => {
        this.router.navigateByUrl('admin/manage/users');
      }
    });
  }
}
