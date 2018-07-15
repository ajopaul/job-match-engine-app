import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './services/app.service';
import { Router } from '../../node_modules/@angular/router';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService, private http: HttpClient, private router: Router){
    this.app.authenticate(undefined, undefined);
  }
  // logout() {
  //   this.http.post('logout', {}).finally(() => {
  //     this.app.authenticated = false;
  //     this.router.navigateByUrl('/login');
  // }).subscribe();
  // }
  // .subscribe(
    // (data: Config) => this.config = { ...data }, // success path
    // error => this.error = error // error path
  // );

  logout() {
    this.http.post('logout', {}).subscribe(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
    });
  }
}

/*
observable().pipe( finalize( x => console.log(x))).subscribe() */