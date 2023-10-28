import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { User } from '../../models/User/User';
import { UserService } from 'src/app/services/UserService/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = []; // Initialize a filteredUsers array

  first = 0;
  rows = 10;

  errorMessage: string | null = null;

  constructor(private userService: UserService, private primengConfig: PrimeNGConfig, private router: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.userService.getUsersList().subscribe(
      (data: User[]) => {
        this.users = data.map((user: User) => ({
          id: user.id,
          username: user.username,
          role: user.role,
          enable: user.enable
        }));
        this.filteredUsers = this.users; // Initialize filteredUsers with all users
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  activateDeactivateUser(user: User): void {
    user.enable = !user.enable;
    if(user.enable) {
      this.userService.activateUser(user.id).subscribe({
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        },
        complete : () => {
          this.router.navigateByUrl('admin/manage/users');
        }
      });
    } else {
      this.userService.deactivateUser(user.id).subscribe({
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        },
        complete : () => {
          this.router.navigateByUrl('admin/manage/users');
        }
      });
    }
  }

  getUserStatus(user: User): string {
    return user.enable ? 'Active' : 'Inactive';
  }

  getUserButtonLabel(user: User): string {
    return user.enable ? 'Deactivate' : ' Activate ';
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  // Add a method to filter users based on the input value
  filterUsers(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    const lowerCaseSearchValue = searchValue.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.id.toString().includes(lowerCaseSearchValue) || user.username.toLowerCase().includes(lowerCaseSearchValue)
    );
  }
}
