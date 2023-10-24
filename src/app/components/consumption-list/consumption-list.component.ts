import { Component } from '@angular/core';
import { Consumption } from '../../models/Consumption/consumption';
import { ConsumptionServiceService } from '../../services/ConsumptionService/consumption-service.service';

@Component({
  selector: 'app-consumption-list',
  templateUrl: './consumption-list.component.html',
  styleUrls: ['./consumption-list.component.css']
})

export class ConsumptionListComponent {
  consumptions!: Consumption[];
  constructor(private consumptionService: ConsumptionServiceService) { 
    
  }    
  
  ngOnInit(): void {
    this.consumptionService.getConsumptions().subscribe(data => {
      this.consumptions = data;
    });
  }
}
