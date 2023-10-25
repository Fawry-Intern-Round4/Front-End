import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import {CreateUser} from "../interfaces/CreateUser";
import {environment} from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.baseUrl);
  }

  createUser(user: CreateUser): Observable<Object> {
    return this.httpClient.post(environment.baseUrl, user);
  }

  activateUser(id: number): Observable<Object> {
    return this.httpClient.put(`${environment.baseUrl}/activation/${id}`, {});
  }

  deactivateUser(id: number): Observable<Object> {
    return this.httpClient.put(`${environment.baseUrl}/deactivation/${id}`, {});
  }

}
