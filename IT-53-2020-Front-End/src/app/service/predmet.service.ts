import { PREDMET_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predmet } from '../models/predmet';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private httpClient: HttpClient) { }

  public getAllPredmet(): Observable<any>{
    return this.httpClient.get(`${PREDMET_URL}`);
  }

  public addPredmet(predmet:Predmet):Observable<any>{
    return this.httpClient.post(`${PREDMET_URL}`, predmet);
  }

  public updatePredmet(predmet:Predmet):Observable<any>{
    return this.httpClient.put(`${PREDMET_URL}/${predmet.id}`, predmet);
  }

  public deletePredmet(id:number):Observable<any>{
    return this.httpClient.delete(`${PREDMET_URL}/${id}`);
  }
}
