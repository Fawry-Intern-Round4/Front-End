import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { User } from '../../interfaces/User';
import {UserService} from "../../services/user.service";

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

  constructor(private userService: UserService, private primengConfig: PrimeNGConfig) { }

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
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  activateDeactivateUser(user: User): void {
    user.enable = !user.enable;
    if(user.enable) {
      this.userService.activateUser(user.id);
    } else {
      this.userService.deactivateUser(user.id);
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
