import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Demo';
  greeting = {};
  constructor(private app:AppService, private http: HttpClient) { 
    http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }

}
