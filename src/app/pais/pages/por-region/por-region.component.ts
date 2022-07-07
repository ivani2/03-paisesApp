import { Component,  } from '@angular/core';

import { Country } from '../../interfaces/paisApi.interface';

import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  paises: Country[] = [];
  regionActiva: string = "";

  constructor( private paisService: PaisService ) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
           ? 'btn btn-primary'
           : 'btn btn-outline-primary';
  }

  activarRegion( region: string ){

    // "fields=name,capital,population,flags,alpha2Code";
    if( region === this.regionActiva ) return ;
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisesPorRegion( region ).subscribe( paises => {
      // console.table( paises );
      this.paises = paises;
    })
  }


}
