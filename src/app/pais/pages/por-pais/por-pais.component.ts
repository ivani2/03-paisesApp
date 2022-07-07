import { Component } from '@angular/core';

import { Country } from '../../interfaces/paisApi.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  hayError: boolean = false;
  termino: string = "";
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean =  false;
  // stringPais: string = "País";

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){

    this.hayError = false;
    this.termino =  termino;
    
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

  sugerencias(termino: string){
    // to do list: 
    
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
    .subscribe( {
      next: (paises) => { this.paisesSugeridos = paises.splice( 0,5 ); },
      error: (error) => { this.paisesSugeridos = []; }
    }  
    );

  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
    this.mostrarSugerencias = false;
    this.termino = "";

  }


  
}
