import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumption } from './consumption';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionServiceService {
  x!: Consumption[];
  private baseUrl = "https://mocki.io/v1/3194144c-4a92-4cac-899e-7109553ff32a";

  constructor( private httpClient: HttpClient) { 
  }

  getConsumptions(): Observable<Consumption[]> {
    return this.httpClient.get<Consumption[]>(`${this.baseUrl}`);
  }
}
