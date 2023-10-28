import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/User/User';
import { CreateUser } from 'src/app/models/CreateUser/CreateUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/user';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>('https://652f22c60b8d8ddac0b239fc.mockapi.io/user');
  }

  createUser(user: CreateUser): Observable<Object> {
    return this.http.post('https://652f22c60b8d8ddac0b239fc.mockapi.io/user', user);
  }

  activateUser(id: number): Observable<Object> {
    return this.http.put(`https://652f22c60b8d8ddac0b239fc.mockapi.io/user/activation/${id}`, {});
  }

  deactivateUser(id: number): Observable<Object> {
    return this.http.put(`https://652f22c60b8d8ddac0b239fc.mockapi.io/user/deactivation/${id}`, {});
  }
}
