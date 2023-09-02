import { UCESNIK_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ucesnik } from '../models/ucesnik';

@Injectable({
  providedIn: 'root'
})
export class UcesnikService {

  constructor(private httpClient: HttpClient) { }

  public getAllUcesniks(): Observable<any>{
    return this.httpClient.get(`${UCESNIK_URL}`);
  }

  public addUcesnik(ucesnik:Ucesnik):Observable<any>{
    return this.httpClient.post(`${UCESNIK_URL}`, ucesnik);
  }

  public updateUcesnik(ucesnik:Ucesnik):Observable<any>{
    return this.httpClient.put(`${UCESNIK_URL}/${ucesnik.id}`, ucesnik);
  }

  public deleteUcesnik(id:number):Observable<any>{
    return this.httpClient.delete(`${UCESNIK_URL}/${id}`);
  }
}