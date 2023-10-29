import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/User/User';
import { CreateUser } from 'src/app/models/CreateUser/CreateUser';
import { HttpAuthAndContentTypeHeaders } from 'src/app/common';

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
    return this.http.get<User[]>(`${this.apiUrl}`, { headers: HttpAuthAndContentTypeHeaders() });
  }

  createUser(user: CreateUser): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, user, { headers: HttpAuthAndContentTypeHeaders() });
  }

  activateUser(id: number): Observable<Object> {
    return this.http.put(`${this.apiUrl}/activation/${id}`, null, { headers: HttpAuthAndContentTypeHeaders() });
  }

  deactivateUser(id: number): Observable<Object> {
    return this.http.put(`${this.apiUrl}/deactivation/${id}`, null, { headers: HttpAuthAndContentTypeHeaders() });
  }
}
