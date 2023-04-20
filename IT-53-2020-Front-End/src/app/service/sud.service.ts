import { SUD_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SudService {

  constructor(private httpClient: HttpClient) { }

  public getAllSuds(): Observable<any>{
    return this.httpClient.get(`${SUD_URL}`);
  }
}
