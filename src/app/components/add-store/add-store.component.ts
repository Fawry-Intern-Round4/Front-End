import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/Store/store';
import { StoreService } from 'src/app/services/StoreService/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent {
  selectedStore!: Store;
  addStoreError: string | null = null;

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    this.selectedStore = new Store();
  }

  addStore() {
    this.storeService.addStore(this.selectedStore).subscribe({
      error: (error: HttpErrorResponse) => {
        this.addStoreError = error.error.message;
      },
      complete: () => {
        this.router.navigateByUrl('admin/manage/stores');
      }
    });
  }
}
