import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  
  GetCountry(): Observable<object> {
    return this.http.get<object>('https://restcountries.com/v2/regionalbloc/EU');
  }
  // fetch('https://restcountries.com/v2/regionalbloc/EU').then(
  //   respone => {
  //     respone.json().then(
  //       data => {
  //         country = data;




}
