import { UCESNIK_ROCISTE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROCISTE_URL } from '../constants';
import { Rociste } from '../models/rociste';

@Injectable({
  providedIn: 'root'
})
export class RocisteService {

  constructor(private httpClient: HttpClient) { }

  public getAllRociste(): Observable<any>{
    return this.httpClient.get(`${ROCISTE_URL}`);
  }

  public addRociste(rociste:Rociste): Observable<any>{
    return this.httpClient.post(`${ROCISTE_URL}`, rociste);
  }

  public updateRociste(rociste: Rociste): Observable<any>{
    return this.httpClient.put(`${ROCISTE_URL}/${rociste.id}`, rociste);
  }

  public deleteRociste(id: number):Observable<any>{
    return this.httpClient.delete(`${ROCISTE_URL}/${id}`);
  }

  public getRocistaforUcesnik(idUcesnika:number): Observable<any>{
    return this.httpClient.get(`${UCESNIK_ROCISTE_URL}/${idUcesnika}`);
  }
}
