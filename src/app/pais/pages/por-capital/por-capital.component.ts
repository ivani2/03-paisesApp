import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/paisApi.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  
  hayError: boolean = false;
  termino: string = "";
  paises: Country[] = [];
  stringCapital: string = "Capital";
  
  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {}

  buscar( termino: any ){
    
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
