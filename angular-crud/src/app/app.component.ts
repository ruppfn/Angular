import { Component, OnInit } from '@angular/core';
import { Persona } from './models/persona';
import { ApiService } from './services/data-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private dataApi: ApiService, private router: Router){ }

  ngOnInit(){
    
  }

  authenticated(){
    return this.dataApi.authenticated;
  }

  logout(){
    //this.dataApi.logout().subscribe();
    this.dataApi.authenticated = false;
    this.router.navigateByUrl('/login');
  }

  

}

