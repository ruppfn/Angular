import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private dataApi: ApiService, private router: Router) {};

  ngOnInit() {
  }

  login(){
    this.dataApi.login(this.credentials, () => {this.router.navigateByUrl('/home');});
    return false;
  }

  authenticated(){
    return this.dataApi.authenticated;
  }

  logFailed(){
    return this.dataApi.logFailed;
  }

}
