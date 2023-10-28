import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public username: string = '';
    public password: string = '';
    public message: string = '';

    constructor(private userService: UserService, private router: Router) {}

    login() {
        this.userService.login({username: this.username, password: this.password})
            .subscribe(
                (response) => {
                    this.message = 'Login successful!';
                    localStorage.removeItem('token');
                    localStorage.setItem('token', response.token);
                    this.router.navigate(['/dashboard']);
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
