import { Component } from '@angular/core';

import { Country } from '../../interfaces/paisApi.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar(){
    console.log( this.termino ); 
    this.hayError = false;
    this.paisService.buscarPais( this.termino )
    .subscribe({ 
      next: (paises) => {
      console.log(paises);
      this.paises =  paises;
      }, 
      error: (error) =>{ 
      console.log("error");
      console.info(error);
      this.paises = [];
      this.hayError = true;
      } 
    });

  }
}
