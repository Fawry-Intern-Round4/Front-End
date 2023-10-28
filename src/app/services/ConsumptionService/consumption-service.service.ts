import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumption } from '../../models/Consumption/consumption';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionServiceService {
  x!: Consumption[];
  private baseUrl = "http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/consumption";

  constructor(private httpClient: HttpClient) {
  }

  getConsumptions(): Observable<Consumption[]> {
    return this.httpClient.get<Consumption[]>(`${this.baseUrl}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
  }
}
