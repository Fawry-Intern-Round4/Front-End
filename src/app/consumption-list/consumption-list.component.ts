import { Component } from '@angular/core';
import { Consumption } from '../consumption';
import { ConsumptionServiceService } from '../consumption-service.service';

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


    // this.consumptions = [{
    //   "consumptionDate": "2021-01-01",
    //   "orderId": 1,
    //   "orderPrice": 100,
    //   "actualDiscount": 10,
    //   "customerEmail": "n"
      
    // }]
    //alert(JSON.stringify(this.consumptions));

  }
}
