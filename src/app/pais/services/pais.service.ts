import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paisApi.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1"; 
  private apiUrlV2: string = "https://restcountries.com/v2"; 

  constructor( private http:HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }
  buscarCapital( termino: string ): Observable<Country[]>{
    const url: string = `${ this.apiUrlV2 }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }
}
