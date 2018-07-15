import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}
