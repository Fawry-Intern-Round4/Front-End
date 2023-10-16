import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  public login(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, request);
  }
}
