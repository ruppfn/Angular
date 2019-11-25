import { Component } from '@angular/core';

import { Persona } from './models/persona';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  personaArray: Persona[] = [
    {id: 1, firstName: 'Juan', lastName: 'Juarez', email: 'test@test.com', address: 'Calle falsa 123'},
    {id: 2, firstName: 'Pedro', lastName: 'Sanchez', email: 'test2@test2.com', address: 'Av. falsa 234'}
  ]

  selectedPersona: Persona = new Persona();

  edit(persona:Persona){
    this.selectedPersona = persona;
  }

  addOrEdit(){
    if(this.selectedPersona.id === 0){
      this.selectedPersona.id = this.personaArray.length +1;
      this.personaArray.push(this.selectedPersona);
    }
    this.selectedPersona = new Persona();
  }

  delete(){
    if(confirm('Are you sure you want to delete it?')){
      this.personaArray = this.personaArray.filter(x => x!= this.selectedPersona);
      this.selectedPersona = new Persona();
    }
  }
}

