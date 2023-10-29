import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  private apiUrl = 'http://a90e27b8aa51d4c869ae95f65b2af55f-2100024466.us-east-1.elb.amazonaws.com:8080/token';
  constructor(router: Router,http:HttpClient) {
    router.events.subscribe(val => {      
      if ((location.href.includes('admin')
      &&!location.href.includes('login')
    ||location.href.includes('dashboard'))&&val.toString().includes('NavigationStart')) {
        console.log("admin");
        http.get<any>(`${this.apiUrl}/validation`,{headers:{"Authorization":`Bearer ${localStorage.getItem('token')}`}}).pipe()
        .subscribe({
          error: (error : HttpErrorResponse) => {
            console.log(error);
            router.navigateByUrl('admin/login');
          },
          complete: () => {
            console.log("success");
          }
        });
      }
    }
    )
  }
}
