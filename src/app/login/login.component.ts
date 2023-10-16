import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public username: string = '';
    public password: string = '';
    public error: string = '';

    constructor(private userService: UserService) {}

    public login(): void {

      const credentials = { username: this.username, password: this.password };

      console.log('Attempting login with credentials:', this.username, this.password);

        this.userService.login(credentials).subscribe((response) => {
            if (response.success) {
                this.error = '';
                localStorage.setItem('token', response.token);
                localStorage.setItem('username', response.username);
            } else {
                this.error = response.message;
            }
        });
    }
}
