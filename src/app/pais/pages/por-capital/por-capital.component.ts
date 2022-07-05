import { Component } from '@angular/core';

import { Country } from '../../interfaces/paisApi.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  
  hayError: boolean = false;
  termino: string = "";
  paises: Country[] = [];
  // stringCapital: string = "Capital";
  
  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){
    
    this.hayError = false;
    this.termino =  termino;
    
    this.paisService.buscarCapital( this.termino )
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

  sugerencias(termino: string){

    this.hayError = false;
    
  }

}
