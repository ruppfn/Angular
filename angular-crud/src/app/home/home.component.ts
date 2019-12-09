import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/data-api.service';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personaArray: Persona[] = [];
  selectedPersona: Persona = new Persona();

  constructor(private dataApi: ApiService, private router: Router) { }

  ngOnInit() {
    this.getPersonas();
  }

  authenticated(){
    return this.dataApi.authenticated;
  }

  getPersonas(){
    this.dataApi.getAllPersonas().subscribe(personas => {
      let personaVar: Persona = new Persona();
      let personaArr = <Array<Object>>personas;
      
      personaArr.forEach(item =>{
        personaVar = <Persona>item;
        this.personaArray.push(personaVar);
      })
      
    });
  }

  refresh(){
    this.selectedPersona = new Persona();
  }
 
  edit(persona:Persona){
    this.selectedPersona = persona;
  }

  saveAll(){
    if(this.selectedPersona.id === 0 && this.selectedPersona.firstName.length > 1){
      this.selectedPersona.id = this.personaArray.length +1;
      this.personaArray.push(this.selectedPersona);
    }
    this.personaArray.forEach(persona => this.dataApi.addPersona(persona).subscribe());
  }

  saveOne(){
    this.dataApi.addPersona(this.selectedPersona).subscribe();
  }

  delete(){
    if(confirm('Are you sure you want to delete it?')){
      this.personaArray = this.personaArray.filter(x => x!= this.selectedPersona);
      this.dataApi.deletePersona(this.selectedPersona.id).subscribe(result => console.log(result));
      this.selectedPersona = new Persona();
    }
  }

}
