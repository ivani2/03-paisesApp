import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/paisApi.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // private apiUrl: string = "https://restcountries.com/v3.1";
  // https://restcountries.com/v2/regionalbloc/EU 
  private apiUrl: string = "https://restcountries.com/v2"; 

  get httpParams (){

    return new HttpParams().set( 'fields', 'name,capital,population,flags,alpha2Code' );
  
  }

  constructor( private http:HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
  buscarCapital( termino: string ): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
  getPaisesPorRegion( region: string ): Observable<Country[]>{
    
    // const params = new HttpParams()
    // .set( 'fields', 'name,capital,population,flags,alpha2Code' );
    
    const url: string = `${ this.apiUrl }/regionalbloc/${ region }`;
    
    return this.http.get<Country[]>( url, { params: this.httpParams } )
    .pipe( 
      tap( console.log ) 
      );
      
    }
    
    getPaisPorAlpha( id: string ): Observable<Country>{
      const url: string = `${ this.apiUrl }/alpha/${ id }`;
      return this.http.get<Country>( url );
    }
    
}
