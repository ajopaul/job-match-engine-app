import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUserData = {}
  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit() {
  }
  registerUser() {
    this._auth.registerUser(this.registeredUserData)
    .subscribe(res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/special'])
    },
    err => console.log(err))
  }

}
