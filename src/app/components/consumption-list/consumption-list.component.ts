import { Component } from '@angular/core';
import { Consumption } from '../../models/Consumption/consumption';
import { ConsumptionServiceService } from '../../services/ConsumptionService/consumption-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-consumption-list',
  templateUrl: './consumption-list.component.html',
  styleUrls: ['./consumption-list.component.css']
})

export class ConsumptionListComponent {
  consumptions!: Consumption[];
  errorMessage: string | null = null;

  constructor(private consumptionService: ConsumptionServiceService) { 
    
  }    
  
  ngOnInit(): void {
    this.consumptionService.getConsumptions().subscribe({
      next: (data) => { this.consumptions = data},
      error: (error : HttpErrorResponse) => {
        this.errorMessage =  error.error.message;
      }
    });
  }
}
