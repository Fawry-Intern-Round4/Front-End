import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public username: string = '';
    public password: string = '';
    public message: string = '';

    constructor(private userService: UserService) {}

    login() {
        this.userService.login({username: this.username, password: this.password})
            .subscribe(
                (response) => {
                    this.message = 'Login successful!';
                    localStorage.setItem('token', response.token);
                },
                (error) => {
                    this.message = 'Login failed. Please check your credentials.';
                }
            );
    }  

    logout() {
        localStorage.removeItem('token');
    }
  }
